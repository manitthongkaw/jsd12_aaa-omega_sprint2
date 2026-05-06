import { useParams } from "react-router-dom";
import { FormatDate } from "../../utils/FormatDate";
import { FormatPrice } from "../../utils/FormatPrice";
import { orders } from "../../mockup-data/orders";
import DataNotFound from "../../utils/DataNotFound";

export default function AdminOrderItem() {

  const { orderId } = useParams();
  const order = orders.find((item) => item.orderId === orderId);

  if (!order) {
    return "Order not found.";
  }

  return (
    <>
      <section id="orderEdit" className="flex flex-row flex-wrap justify-between items-center gap-10">
        <h1><span className="text-content-hover">รายละเอียดคำสั่งซื้อ:</span> {order.orderId}</h1>
        <select className="button button-soft button-content" name="statusOrder" defaultValue={order.status}>
          <option value="" disabled hidden>เลือกสถานะ</option>
          <option value="pending_payment">รอชำระเงิน</option>
          <option value="paid">ชำระเงินแล้ว</option>
          <option value="preparing">กำลังเตรียมสินค้า</option>
          <option value="shipping">กำลังจัดส่ง</option>
          <option value="delivered">จัดส่งสำเร็จ</option>
          <option value="cancelled">ยกเลิกคำสั่งซื้อ</option>
        </select>
        <table className="table-responsive">
          <colgroup>
            <col className="w-px" />
            <col className="w-auto" />
          </colgroup>
          <tbody>
            <tr>
              <th>วันที่สั่งซื้อ</th>
              <td>{FormatDate(order.createdAt) ? FormatDate(order.createdAt) : <DataNotFound />}</td>
            </tr>
            <tr>
              <th>ชื่อผู้สั่งชื่อ</th>
              <td>{order.customerName ? order.customerName : <DataNotFound />}</td>
            </tr>
            <tr>
              <th>เบอร์ติดต่อ</th>
              <td>{order.customerPhone ? order.customerPhone : <DataNotFound />}</td>
            </tr>
            <tr>
              <th>อีเมล</th>
              <td>{order.customerEmail ? order.customerEmail : <DataNotFound />}</td>
            </tr>
            <tr>
              <th>ที่อยู่จัดส่ง</th>
              <td>{order.shippingAddress ? order.shippingAddress : <DataNotFound />}</td>
            </tr>
          </tbody>
        </table>
        <div className="table-container">
          <table>
            <colgroup>
              <col className="w-auto" />
              <col className="w-px" />
              <col className="w-px" />
              <col className="w-px" />
              <col className="w-px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">รายการ</th>
                <th scope="col">รหัสสินค้า</th>
                <th scope="col" className="text-right">จำนวน</th>
                <th scope="col" className="text-right">ราคา/หน่วย</th>
                <th scope="col" className="text-right">ราคารวม</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Solar Panel Mono 450W</td>
                <td>SP-450-MN</td>
                <td className="text-right">50</td>
                <td className="text-right">4,800</td>
                <td className="text-right">240,000</td>
              </tr>
              <tr>
                <td>Hybrid Inverter 5kW</td>
                <td>IV-5KW-HB</td>
                <td className="text-right">1</td>
                <td className="text-right">28,500</td>
                <td className="text-right">28,500</td>
              </tr>
              <tr>
                <td>MC4 Connector</td>
                <td>ACC-MC4-P</td>
                <td className="text-right">200</td>
                <td className="text-right">45</td>
                <td className="text-right">9,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t-neutral-disable">
                <td></td>
                <th colSpan="3">ยอดรวมสุทธิ</th>
                <td className="text-right">{FormatPrice(order.totalPrice)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <form className="lg:grow self-start lg:w-1/2">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="message">หมายเหตุ:</label>
              <textarea id="message" className="min-h-15.5 sm:min-h-38" rows="4" placeholder="กรอกรายละเอียด?"></textarea>
            </div>
            <div className="input-group">
              <label htmlFor="note">โน้ตภายใน:</label>
              <textarea id="note" className="min-h-15.5 sm:min-h-38" rows="4" placeholder="กรอกข้อความตามต้องการ?"></textarea>
            </div>
          </div>
          <div className="button-row">
            <button type="reset" className="button button-soft button-content">ยกเลิก</button>
            <button type="submit" className="button">บันทึก</button>
          </div>
        </form>
      </section>
    </>
  );

};