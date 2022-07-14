import { useState } from "react";
import { HistoryTransactionTypes } from "../../../services/data-types";
import Row from "./Row";

export default function TransactionDetailContent(props: any) {
  const { data }: any = props;

  const resultDataContent = data.data;

  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details {resultDataContent._id}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src={`${IMG}/${resultDataContent.historyVoucherTopup.thumbnail}`}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {resultDataContent.historyVoucherTopup.gameName}
                    </p>
                    <p className="color-palette-2 m-0">Category: Mobile</p>
                  </div>
                </div>
                <div>
                  <p
                    className={`fw-medium text-center label ${resultDataContent.status} m-0 rounded-pill`}
                  >
                    {resultDataContent.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <Row
                  label="Your Game Id"
                  value={resultDataContent.accountUser}
                />
                <Row label="Order ID" value={resultDataContent._id} />
                <Row
                  label="Item"
                  value={`${resultDataContent.historyVoucherTopup.coinQuantity} ${resultDataContent.historyVoucherTopup.coinName}`}
                />
                <Row
                  label="Price"
                  value={resultDataContent.historyVoucherTopup.price}
                />
                <Row label="Tax (10%)" value={resultDataContent.tax} />
                <Row
                  label="Total"
                  value={resultDataContent.total}
                  className="color-palette-4"
                />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <Row label="Your Account Name" value={resultDataContent.name} />
                <Row
                  label="Bank Name"
                  value={resultDataContent.historyPayment.bankName}
                />
                <Row
                  label="Bank Account Name"
                  value={resultDataContent.historyPayment.name}
                />
                <Row
                  label="Bank Number"
                  value={resultDataContent.historyPayment.noRekening}
                />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
