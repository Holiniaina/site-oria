import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const {t} = useTranslation()
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
        .sendForm(
            'service_oriagroupe',
            'template_l9si2hd',
            refForm.current,
            '3VkV2tYNEKrxT6YMZ' 
        )
        .then(() => {
            toast.success('Message envoyé avec succès!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            refForm.current.reset()
        })
        .catch((error) => {
            console.error("Erreur d'envoi:", error)
            toast.error("Erreur d'envoi, veuillez réessayer", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
}

  return (
    <div className="text-sm items-center justify-center w-full py-10 px-4 md:px-32 ">
      <ToastContainer />
      <div className="container mx-auto pb-10 lg:flex lg:space-x-10 lg:items-start">
        {/* Section Formulaire et informations de contact */}
        <div className="flex flex-col md:flex-row gap-10 w-full mx-auto my-auto">
          {/* Formulaire de contact */}
          <form
            className="space-y-4 lg:w-1/2"
            ref={refForm}
            onSubmit={sendEmail}
          >
            <div className="flex space-x-4">
              <Input
                label="Nom"
                placeholder={t('name')}
                className="flex-1"
                name="name"
                required
              />
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                className="flex-1"
                required
                name="email"
              />
            </div>

            <Textarea
              label="Message"
              placeholder={t('message')}
              rows={4}
              className="w-full"
              required
              name="message"
            />

            <Button type="submit" className="w-full mt-4 bg-[#868686]">
              {t('sendmessage')}
            </Button>
          </form>

          <div className="right lg:w-1/2 flex-col">
            {/* Texte d'introduction */}
            <div className="space-y-4 text-gray-700">
              <p>
              {t('Oria6')}
              </p>
              <p>{t('contactustext')}</p>
            </div>

            {/* Informations de contact */}
            <div className="space-y-4 mt-4 text-gray-700">
              <div className="flex flex-col lg:flex-row w-[100%] justify-between">
                <div className="flex-col space-x-2">
                  <p>{t('phone')}:</p>
                  <div className="flex space-x-2">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#868686"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>phone</title>{" "}
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          {" "}
                          <g
                            id="Icon-Set-Filled"
                            sketch:type="MSLayerGroup"
                            transform="translate(-258.000000, -309.000000)"
                            fill="#868686"
                          >
                            {" "}
                            <path
                              d="M289.073,313.433 L286.195,310.563 C285.401,309.77 284.112,309.77 283.317,310.563 L279,316.303 C278.341,317.274 278.206,318.38 279,319.173 L280.762,320.93 C279.456,322.68 277.888,324.588 276.123,326.348 C274.127,328.338 271.907,330.147 269.911,331.633 L268.208,329.936 C267.414,329.143 266.305,329.277 265.33,329.936 L259.574,334.241 C258.609,334.906 258.779,336.318 259.574,337.111 L262.452,339.98 C264.042,341.566 266.109,341.058 268.208,339.98 C268.208,339.98 274.561,336.424 280,331 C285.116,325.898 289.073,319.173 289.073,319.173 C289.898,316.91 290.663,315.018 289.073,313.433"
                              id="phone"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <span>032 01 016 00</span>
                  </div>
                </div>

                <div className="flex-col space-x-2">
                  <p>Email :</p>
                  <div className="flex items-center space-x-2">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 -3.5 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                      fill="#868686"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>mail</title>{" "}
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                          sketch:type="MSPage"
                        >
                          {" "}
                          <g
                            id="Icon-Set-Filled"
                            sketch:type="MSLayerGroup"
                            transform="translate(-414.000000, -261.000000)"
                            fill="#868686"
                          >
                            {" "}
                            <path
                              d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z"
                              id="mail"
                              sketch:type="MSShapeGroup"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                    <p>info@oriagroupe.com</p>
                  </div>
                </div>
              </div>
              <div className="flex-col  ">
                <p>{t('lowerAddress')} :</p>
                <div className="flex items-center space-x-2 space-y-2">
                  <svg
                    version="1.0"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="20px"
                    height="20px"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                    xml:space="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#868686"
                        d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                    </g>
                  </svg>{" "}
                  <span>Antananarivo, Soavimasoandro Lot II H 115 D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
