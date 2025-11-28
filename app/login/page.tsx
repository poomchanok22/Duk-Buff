"use client";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import GhostJumpScare from "@/components/GhostJumpScare"; // <= import

interface RegisterFormValues {
  name: string;
  age: string;
  favorite: string;
}

const RegisterForm: React.FC = () => {
  const [showGhost, setShowGhost] = useState(false);

  const [userName, setUserName] = useState("");

  const onFinish = (values: RegisterFormValues) => {
    console.log("Form Values:", values);
    message.success("ลงทะเบียนสำเร็จ!");
    setUserName(values.name); // <= เก็บชื่อ
    setTimeout(() => {
      setShowGhost(true);
    }, 500);
  };

  const onFinishFailed = () => {
    message.error("กรุณากรอกข้อมูลให้ครบถ้วน");
  };

  if (showGhost) {
    return <GhostJumpScare userName={userName} />; // <= return component
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 400,
          padding: "24px",
          borderRadius: 8,
          border: "1px solid #f0f0f0",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          background: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20, color: "#000" }}>
          กรุณากรอกข้อมูล
        </h2>
        <Form
          layout="vertical"
          name="registerForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="ชื่อ"
            name="name"
            rules={[{ required: true, message: "กรุณากรอกชื่อของคุณ" }]}
          >
            <Input placeholder="ชื่อของคุณ" />
          </Form.Item>

          {/* <Form.Item
            label="อายุ"
            name="age"
            rules={[{ required: true, message: "กรุณากรอกอายุ" }]}
          >
            <Input placeholder="อายุของคุณ" />
          </Form.Item> */}

          <Form.Item
            label="สิ่งที่ชอบ"
            name="favorite"
            rules={[{ required: true, message: "กรุณากรอกสิ่งที่ชอบ" }]}
          >
            <Input placeholder="สิ่งที่คุณชอบ" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
