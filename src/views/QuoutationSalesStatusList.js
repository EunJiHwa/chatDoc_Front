import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/list.scss";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const QuoutationSalesStatusList = () => {
  return (
    <div>
      <h1>견적 목록</h1>
      <Button variant="primary">견적서 등록</Button>{" "}
      <Link to={"/QuoutationSalesStatus"} state={{ grade: "cho" }}>
        <Button variant="dark">챗</Button>
      </Link>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>견적번호</th>
              <th>견적일자</th>
              <th>거래처명</th>
              <th>견적금액</th>
              <th>제출일자</th>
              <th>작성자</th>
              <th>결과</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>E24-0001</td>
              <td>2024-01-27</td>
              <td>글로벌금융판매</td>
              <td>200000</td>
              <td>2024-01-30</td>
              <td>박성흔</td>
              <td>게약</td>
              <td>최저금액 입찰</td>
            </tr>
            <tr>
              <td>2</td>
              <td>E24-0002</td>
              <td>2024-01-27</td>
              <td>상호물산</td>
              <td>154000</td>
              <td>2024-01-29</td>
              <td>강민</td>
              <td>탈락</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>E24-0003</td>
              <td>2024-01-30</td>
              <td>가나상사</td>
              <td>4000000</td>
              <td>2024-01-31</td>
              <td>박인호</td>
              <td>견적</td>
              <td>작성중</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default QuoutationSalesStatusList;
