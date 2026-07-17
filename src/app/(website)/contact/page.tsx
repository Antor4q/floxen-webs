import ContactBanner from "@/src/components/contact/ContactBanner";
import Form from "@/src/components/contact/Form";

const page = () => {
    return (
        <div className="pt-40 pb-10 max-w-360 mx-auto">
            <ContactBanner/>
            <Form/>
        </div>
    );
};

export default page;