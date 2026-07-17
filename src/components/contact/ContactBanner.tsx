
const ContactBanner = () => {
    return (
        <div className="flex flex-col items-center text-center gap-3">
              {/* Badge */}
                            <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-zinc-400 text-sm mb-4">
                              GET IN TOUCH
                            </div>
                      
                            {/* Heading */}
                          <h2 className="text-5xl leading-16 font-bold">
                                 
                                   We`d love to here from you.
                                  </h2>
                                  {/* Description */}
             <p className="max-w-2xl mt-4  text-zinc-400 text-sm sm:text-base lg:text-xl leading-relaxed px-2">
              Have a question, idea, or just want to say hi? We`re always excited to connect with creators and builders. 
             </p> 
        </div>
    );
};

export default ContactBanner;