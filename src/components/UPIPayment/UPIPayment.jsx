import { useState } from "react"
import useScrollAnimation from "../../hooks/useScrollAnimation"
import "./UPIPayment.scss"

export default function UPIPayment() {
  const [qrError, setQrError] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="payment"
      className={`upi-payment ${isVisible ? "upi-payment--visible" : ""}`}
      ref={ref}
    >
      <h2>Pay via UPI</h2>
      <div className="upi-payment__container">
        {!qrError && (
          <img
            className="upi-payment__qr"
            src={`${import.meta.env.BASE_URL}images/upi-qr.jpeg`}
            alt="UPI payment QR code for Srilaxmi Homefoods"
            width="300"
            height="300"
            loading="lazy"
            onError={() => setQrError(true)}
          />
        )}
        <p className="upi-payment__id">
          UPI ID:{" "}
          <span className="upi-payment__id-text">siliverusaivamshhi@oksbi</span>
        </p>
        {qrError && (
          <div className="upi-payment__fallback">
            <p>QR code unavailable. Please pay using UPI ID:</p>
            <p className="upi-payment__id-text">
              <strong>siliverusaivamshhi@oksbi</strong>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
