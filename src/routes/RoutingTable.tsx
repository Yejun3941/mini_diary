import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./notFound";

export default function RoutingTable() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {" "}
        {/* 여기가 메인  */}
        {/* 여기가 본문 내용 */}
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
