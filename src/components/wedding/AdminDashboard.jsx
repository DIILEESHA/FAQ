import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Modal, Form, message, Card, Spin, Result, Tag } from 'antd';
import { DownloadOutlined, LockOutlined } from '@ant-design/icons';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import * as XLSX from 'xlsx';

// Firebase configuration
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
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  // Password protection
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
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <>
          <Tag color={record.isAttending ? 'green' : 'red'}>
            {record.isAttending ? 'Attending' : 'Not Attending'}
          </Tag>
          {record.attendingBoatParty && (
            <Tag color="blue">Boat Party</Tag>
          )}
          {record.interestedInGroupFlight && (
            <Tag color="orange">Flight Discount</Tag>
          )}
        </>
      ),
      filters: [
        { text: 'Attending', value: true },
        { text: 'Not Attending', value: false },
        { text: 'Boat Party', value: 'boat' },
        { text: 'Flight Discount', value: 'flight' },
      ],
      onFilter: (value, record) => {
        if (value === true) return record.isAttending;
        if (value === false) return !record.isAttending;
        if (value === 'boat') return record.attendingBoatParty;
        if (value === 'flight') return record.interestedInGroupFlight;
        return true;
      },
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
      render: (plusOne) => (
        <Tag color={plusOne ? 'geekblue' : 'default'}>
          {plusOne ? 'Yes' : 'No'}
        </Tag>
      ),
      filters: [
        { text: 'Yes', value: true },
        { text: 'No', value: false },
      ],
      onFilter: (value, record) => record.hasPlusOne === value,
    },
    {
      title: 'Dance Song',
      dataIndex: 'danceSong',
      key: 'danceSong',
      render: (song) => song || 'N/A',
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
    // Prepare data with all fields
    const exportData = rsvps.map(rsvp => ({
      'Full Name': rsvp.fullName,
      'Email': rsvp.email,
      'Phone': rsvp.phone,
      'Attending': rsvp.isAttending ? 'Yes' : 'No',
      'Arrival Date': rsvp.arrivalDate,
      'Boat Party Attendance': rsvp.attendingBoatParty ? 'Yes' : 'No',
      'Has Plus One': rsvp.hasPlusOne ? 'Yes' : 'No',
      'Plus One Name': rsvp.plusOneName || 'N/A',
      'Plus One Email': rsvp.plusOneEmail || 'N/A',
      'Plus One Phone': rsvp.plusOnePhone || 'N/A',
      'Dietary Requirements': rsvp.dietaryRequirements || 'None',
      'Interested in Group Flight': rsvp.interestedInGroupFlight ? 'Yes' : 'No',
      'Flight Contact Email': rsvp.groupFlightEmail || 'N/A',
      'Flight Contact Phone': rsvp.groupFlightPhone || 'N/A',
      'Dance Song': rsvp.danceSong || 'N/A',
      'Submitted At': new Date(rsvp.submittedAt).toLocaleString()
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
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

  const expandableRow = {
    expandedRowRender: (record) => (
      <div style={{ margin: 0 }}>
        <p><strong>Dietary Requirements:</strong> {record.dietaryRequirements || 'None'}</p>
        <p><strong>Dance Song:</strong> {record.danceSong || 'Not specified'}</p>
        
        {record.hasPlusOne && (
          <>
            <p><strong>Plus One Details:</strong></p>
            <ul>
              <li>Name: {record.plusOneName}</li>
              <li>Email: {record.plusOneEmail}</li>
              <li>Phone: {record.plusOnePhone}</li>
            </ul>
          </>
        )}

        {record.interestedInGroupFlight && (
          <>
            <p><strong>Flight Discount Interest:</strong></p>
            <ul>
              <li>Contact Email: {record.groupFlightEmail}</li>
              <li>Contact Phone: {record.groupFlightPhone}</li>
            </ul>
          </>
        )}

        {record.arrivalDate && record.arrivalDate.includes("1st January 2026") && (
          <p><strong>Boat Party Attendance:</strong> {record.attendingBoatParty ? 'Yes' : 'No'}</p>
        )}
      </div>
    ),
    expandedRowKeys,
    onExpand: (expanded, record) => {
      if (expanded) {
        setExpandedRowKeys([record.id]);
      } else {
        setExpandedRowKeys([]);
      }
    },
  };

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
            expandable={expandableRow}
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