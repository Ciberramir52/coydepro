import AccordionItem from "../components/AccordionItem";
import IndustryCard from "../components/IndustryCard";
import ServiceBanner from "../components/ServiceBanner";
import { bannerInfo, industries, services } from "../helpers/services";
import serviceBanner from "/src/assets/images/ServiceBanner.png"

function ServicePage() {
    return (
        <>
            <div style={{ minWidth: "400px" }} className="container-fluid my-5p w-80">
                <ServiceBanner img={serviceBanner} {...bannerInfo} />
            </div>
            <div className="container my-10p">
                <div className="accordion" id="accordionExample">
                    {
                        services.map(service => <AccordionItem key={service.title} {...service} />)
                    }
                </div>
            </div>
            <div style={{ minWidth: "400px" }} className="container-fluid w-80">
                <div className="row gx-5 gy-5 justify-content-center">
                    {
                        industries.map(industry => <IndustryCard key={industry.title} {...industry} />)
                    }
                </div>
            </div>
        </>
    );
}

export default ServicePage;