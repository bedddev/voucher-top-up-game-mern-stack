import ReachedSkor from "../../molecules/ReachedSkor";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
        <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                <ReachedSkor points='290M+' category='Players Top Up'/>
                <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                <ReachedSkor points='12.500' category='Games Available'/>
                <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                <ReachedSkor points='99,9%' category='Happy Players'/>
                <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
                <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
                <ReachedSkor points='4.7' category='Rating Worldwide'/>
            </div>
        </div>
    </section>
  )
}
