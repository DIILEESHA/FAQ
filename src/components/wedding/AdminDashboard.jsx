import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Modal, Form, message, Card, Spin, Result } from 'antd';
import { DownloadOutlined, LockOutlined } from '@ant-design/icons';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import * as XLSX from 'xlsx';

// Firebase configuration (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyCiT4jKLC41a9oCYS9WHbBnapFkWW7bDgM",
  authDomain: "gothya-9f271.firebaseapp.com",
  projectId: "gothya-9f271",
  storageBucket: "gothya-9f271.appspot.com",
  messagingSenderId: "1009194076515",
  appId: "1:1009194076515:web:54d98dd6e8d270ef026b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AdminDashboard = () => {
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true);

  // Password protection (replace with your secure password)
  const ADMIN_PASSWORD = 'BemaAndKwame2026'; // Change this to your actual password

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Attending',
      dataIndex: 'isAttending',
      key: 'isAttending',
      render: (attending) => (attending ? 'Yes' : 'No'),
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value, record) => record.isAttending === value,
    },
    {
      title: 'Arrival Date',
      dataIndex: 'arrivalDate',
      key: 'arrivalDate',
      sorter: (a, b) => a.arrivalDate.localeCompare(b.arrivalDate),
    },
    {
      title: 'Plus One',
      dataIndex: 'hasPlusOne',
      key: 'hasPlusOne',
      render: (plusOne) => (plusOne ? 'Yes' : 'No'),
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value, record) => record.hasPlusOne === value,
    },
    {
      title: 'Dietary Requirements',
      dataIndex: 'dietaryRequirements',
      key: 'dietaryRequirements',
    },
    {
      title: 'Submitted At',
      dataIndex: 'submittedAt',
      key: 'submittedAt',
      render: (date) => new Date(date).toLocaleString(),
      sorter: (a, b) => new Date(a.submittedAt) - new Date(b.submittedAt),
    },
  ];

  useEffect(() => {
    if (isAuthenticated) {
      fetchRsvps();
    }
  }, [isAuthenticated]);

  const fetchRsvps = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'rsvps'));
      const rsvpData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRsvps(rsvpData);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
      message.error('Failed to fetch RSVPs');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handlePasswordSubmit = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
      message.success('Authentication successful');
    } else {
      message.error('Incorrect password');
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rsvps);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'RSVPs');
    XLSX.writeFile(workbook, 'wedding_rsvps.xlsx');
  };

 const filteredData = rsvps.filter(rsvp =>
  Object.values(rsvp).some(
    value =>
      value &&
      value.toString().toLowerCase().includes(searchText.toLowerCase())
  )
); 

  if (!isAuthenticated) {
    return (
      <Modal
        title="Admin Authentication"
        visible={showPasswordModal}
        onCancel={() => setShowPasswordModal(false)}
        footer={null}
        closable={false}
      >
        <Form onFinish={handlePasswordSubmit}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter the password' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <Card
        title="Wedding RSVP Dashboard"
        extra={
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={exportToExcel}
          >
            Export to Excel
          </Button>
        }
      >
        <div style={{ marginBottom: '16px' }}>
          <Input.Search
            placeholder="Search RSVPs..."
            allowClear
            enterButton
            onSearch={handleSearch}
            style={{ width: '300px' }}
          />
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <Spin size="large" />
          </div>
        ) : rsvps.length === 0 ? (
          <Result
            status="404"
            title="No RSVPs Found"
            subTitle="There are no RSVPs submitted yet."
          />
        ) : (
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="id"
            bordered
            size="middle"
            scroll={{ x: 'max-content' }}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '50', '100'],
            }}
          />
        )}
      </Card>
    </div>
  );
};

export default AdminDashboard;