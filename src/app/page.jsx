import CardOne from "@/components/CardOne";
import CardThree from "@/components/CardThree";
import CardTwo from "@/components/CardTwo";
import ThemeButton from "@/components/ThemeButton";
import { Icon } from "@iconify/react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-38">
      <p className="text-[#C6C6C6] text-xl mb-5">Trust the process</p>
      <p
        className={`${pacifico.className} [text-shadow:3px_3px_2px_rgba(0,0,0,0.3)] text-[105px] w-[60%] text-center`}
      >
        <span className="relative inline-block text-white font-bold before:content-[''] before:absolute before:-z-10 before:left-0 before:top-1/2 before:w-[300px] before:h-[130px] before:bg-[#B8E900] before:-rotate-2 before:-translate-y-1/2 before:rounded-[30px] px-2">
          Boost
        </span>{" "}
        Your business with our{" "}
        <span className="relative inline-block text-white font-bold before:content-[''] before:absolute before:-z-10 before:left-0 before:top-1/2 before:w-[400px] before:h-[130px] before:bg-[#B8E900] before:-rotate-2 before:-translate-y-1/2 before:rounded-[30px] px-2">
          Creative
        </span>{" "}
        magic
      </p>
      <p className="mt-[80px] text-[24px] font-bold w-[43%] text-center">
        "Empowering businesses with reliable, scalable, and innovative{" "}
        <span className="text-[#B8E900]">IT solutions</span> tailored to drive{" "}
        <span className="text-[#B8E900]">growth</span> and{" "}
        <span className="text-[#B8E900]">efficiency</span>."
      </p>
      <div className="bg-black p-[50px] rounded-[50px] w-full mt-16 flex flex-col items-center gap-10">
        <div className="w-full bg-[#B8E900] text-black rounded-[50px] p-[10px] text-[20px] font-semibold flex items-center justify-around">
          <p>UI/UX DESIGN</p>
          <Icon
            icon="material-symbols:star-rounded"
            width="24"
            height="24"
            color="black"
          />
          <p>WEB DEVELOPMENT</p>
          <Icon
            icon="material-symbols:star-rounded"
            width="24"
            height="24"
            color="black"
          />
          <p>MOBILE APP DEVELOPMENT</p>
        </div>
        <div className="flex justify-between w-full items-center text-white">
          <p className="font-bold text-[25px]">OUR SERVICES</p>
          <p className="text-[14px]">
            Simple but powerful process to Hike your buisness
          </p>
        </div>
        <div className="w-full h-[.5px] bg-white mt-[-25px]" />
        <div className="flex w-full justify-between text-white">
          <CardOne
            title={"UI/UX DESIGN"}
            desc={
              "Crafting seamless and engaging digital experiences that users love."
            }
            image={
              "https://s3-alpha-sig.figma.com/img/4324/0ae1/8dee32b24fbb8919bcaab67f37a48337?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iz9atNFM-6hhEYsEITu5GzBTgO1Vz8IxcKmc4EQK2TERw5Q9J77AHCgTnIBGN66wqnu0CkJBJ6m3HAKy-MZ6LMggf5r3Z3QQ3oNLxpwsgDXOB-QitOrVQhGDYXarxy1C0lwZS~aRGihSFzhUx99gcigCe2PBTQeIXwGoXPirX6wVjQc-Oz62llzja8ZIiUmzZ7ZhX8AvxeFi3Px5oDo5nijfh2xk6r4O4-I71XmS2PKOQ-IZydBCmXF1NxuckjkayDLNg7NC3hMYviYjLdojG7f96qACpTkknCpl7pS5DAIhpqV5UKU~puiywM1FJ4hi7-K6RQgnDJ8RscVD-V4ShQ__"
            }
          />
          <CardTwo
            title={"WEB DEVELOPMENT"}
            desc={
              "We build fast, secure, and responsive websites tailored to your business needs"
            }
            image={
              "https://s3-alpha-sig.figma.com/img/66bd/f337/05acdfc3cc80baa0d1e44af9925a3bfd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GWTinVdMr1SlHwdnBYRilXlA87y4O0CyO6M~X9OqeCyaO9XjZSdd3-IFaLd5eMhpJL-NfBTPEB3AvtUjTlzpWeJD6uU6W~UZ~jX6bf65jaZEQUk-FQEMZ4IkmvgOmB9FHr3TCADgfK2tlotmoAOol3kkKrTLR~OEjwbCzkOXuI4VxONjJNWcoR3P3~ydaEcAFOPzUk-ZCXQI-uH1QdGeG0A68ogkoKZHcZxoEVPJ~7hLoj~9f8I9gHXTIJtKxXyCyYambDw7HRC-UzdFdpNUDWsLmdlx2NxotMYmWpBIM66z77OF5NHxUC6jZDweecEPwYodEjnFbp1JRqXc63vE~A__"
            }
          />
          <CardOne
            title={"MOBILE APP DEVELOPMENT"}
            desc={
              "Creating powerful mobile apps with intuitive design and smooth functionality."
            }
            image={
              "https://s3-alpha-sig.figma.com/img/50f4/b918/13df1960c778455221cd898b0c8851a2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fjqf-1E2mxIyM~3qk4K-L~7XOgBaxFKCbJ0YusiprcegxHq97saXvOhQMRtW0-Or8aXEmT3~bHeQOt~rlL5U~rCHU1~DabVmsy9QoMDjtamt0pT-3UbG5PraibARVCxNdPNoH0IkbbxyV47RGwf6L-QDZxYowmdhP836XwiIb8EvruS7~bs0Td1jM1FwuClO6vxfKchmCMOTe7KESiQKdtmcawvYBembAhFiCqg8RhVUegGtUoVK-e649P3PIdhS~yuCu-WcJADGUyogmUOe29dsGFE07dZoO5up06f31nED9HpLtNlj0XLgjQmziywGHgQ7oEiSEKkjh8wEME~FkA__"
            }
          />
        </div>
        <p className="text-[60px] text-[#B8E900] text-center mt-10">
          "We build, secure, and scale your digital presence with expert{" "}
          <span className="relative inline-block z-5 font-bold before:content-[''] before:absolute before:-z-10 before:left-0 before:top-1/2 before:w-[340px] before:h-[100px] before:bg-[white] before:-rotate-1 before:-translate-y-1/2 before:rounded-[30px] px-2">
            IT Services
          </span>{" "}
          you can trust."
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 gap-5 w-full">
        <p className="text-[30px]">OUR PROJECTS</p>
        <p className="text-[20px]">
          "See our <span className="text-[#B8E900]">work in action</span> —
          powerful, user-centric solutions built to inspire."
        </p>
        <div className="flex justify-between w-[40%]">
          <ThemeButton name={"DESIGN"} />
          <ThemeButton name={"WEB DEVELOPMENT"} />
          <ThemeButton name={"APP DEVELOPMENT"} />
        </div>
        <div className="flex justify-between w-[80%] mt-10">
          <CardThree
            image={
              "https://s3-alpha-sig.figma.com/img/0f78/c5ee/3f72060b291f57b7322fa932208387cf?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WspWL2QmK-NC0e93xc-ztz9K2E7inK6c7HtdmuOvOBhiCxNrVd-Am7tDHHLKFRLiuFzVh4etBn0XyQjF9qJXFBscKg89FtYIGaGumI4fyOTXmRq00D4wPzJztnWTUFIgsfiQL0ObeWZET~BOBIeJSkp~JtySqi85rUt9t80H0KqfZKcE7FWhOkFfspcW4-0j3IKxkzTCUtH9s6HZEC~KLdXnoSmDlm~-82tLQHZBOwPttiVczv~hlIFzWS3H2Om8Nqa8fhj~5bDCDhMNnZ6R~m~tUxJuSqqxJPwvs4QKyX7k2w2YB7LKiG1XVsKVbXUMPRLRA7O-cFC~swmMaiBr3w__"
            }
          />
          <CardThree
            image={
              "https://s3-alpha-sig.figma.com/img/7862/568f/19ea9529bd66dbc841472c548d7d9517?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eQJUCWBCKh3QRcoo2ALh0OgBg7FSqoaGLI6tyJzx36YUDtzRToMf-mdTKMrgxTrqcXztBJS3FQSkT7YH58~ncYA~hn9aFSprOXdzm3sZXVITpwIBrb4~VKsUsMbF2RCq~oCNx7d0W11XtlNrgdFye3pe6ttf6a19yEzYPOpN7YUMZXevffPzpxaQd3birrqgqpPmfunG3ANhe3K7VDDOMlou24JFAPLGegryIwFFk1lDlXhIl~SH8T0skqIW2MfNMMroPwy0INRFXLk~avlT2YYuujPU8edaI7vbgMQwQa6K16bgkhNrX2go2dnXkbbC0~tP7KDoaEYEWDvZef3k0Q__"
            }
          />
          <CardThree
            image={
              "https://s3-alpha-sig.figma.com/img/4edb/f6fc/e8ebe0d0fe7e95f67aa6ab5d939b75ab?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QbF9g1YYErj0jA4jZ7fiM5SIuTfIoOWbye-9RwoGT2ZiLM4zAFpc9iiYky0u3izO3DnMgCf5xY3EXbEHuZt5m58zUZLvBloREzjdWRJ19TE0lnD-bXtQ~INMdqZthlqzFdkFcfNTZPxI4p8xRrHq~BpzSOmlLssKQNHKfE~nMvgSs4dUmv1ba~U-TW0tRY5LiGs60JSwNUbE7fMj04YaPR06~7VksghsEmLUt4-VIMJzIcBou9T~vDYDRbmZgYFI5o7aJFVcWZmAI7b3-ChJlrw2klK7W~tP7NQDATsCwRmq~c-2J87vbbWVmq~8MXMFjhm-GUIj90ITv~7S-6DWRQ__"
            }
          />
        </div>
        <div className="flex justify-center gap-18 mt-10">
          <ThemeButton name={"PREVIOUS"} />
          <ThemeButton name={"NEXT"} />
        </div>
      </div>
      <div className="bg-black p-[50px] rounded-tr-[50px] rounded-tl-[50px] w-full mt-16 flex flex-col items-center gap-10 text-white">
        <p className="font-bold text-[25px] w-full">CONTACT US</p>
        <div className="w-full h-[.5px] bg-white mt-[-25px]" />
        <div className="bg-white w-[70%] p-2 flex rounded-4xl">
          <div className="bg-[#D5D5D5] rounded-4xl text-black w-[30%] flex flex-col gap-10 p-10">
            <p className="text-2xl">Contact Information</p>
            <div className="flex items-center gap-5">
              <Icon icon="ic:round-phone" width="36" />
              <p className="text-lg">+91 9999999999</p>
            </div>
            <div className="flex items-center gap-5">
              <Icon icon="material-symbols-light:mail" width="36" />
              <p className="text-lg">coconoid@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <Icon icon="mdi:location" width="36" />
              <p className="text-lg">Kerala, India</p>
            </div>
          </div>
          <div className="w-full p-12 flex flex-col gap-10">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Your Name"
                className="placeholder-[#D5D5D5] border-black border-b-1 p-2 focus:outline-none text-black"
              />
              <input
                type="text"
                placeholder="Email"
                className="placeholder-[#D5D5D5] border-black border-b-1 p-2 focus:outline-none text-black"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="placeholder-[#D5D5D5] border-black border-b-1 p-2 focus:outline-none text-black w-full"
            />
            <input
              type="text"
              placeholder="Message"
              className="placeholder-[#D5D5D5] border-black border-b-1 p-2 focus:outline-none text-black w-full"
            />
            <ThemeButton name={"Send Message"} />
          </div>
        </div>
        <p className="text-[80px] text-white text-center mt-10 w-[50%]">
          We can create an ecentric{" "}
          <span className="relative text-black inline-block z-5 font-bold before:content-[''] before:absolute before:-z-10 before:left-0 before:top-1/2 before:w-[380px] before:h-[130px] before:bg-[#B8E900] before:-rotate-1 before:-translate-y-1/2 before:rounded-bl-[30px] before:rounded-br-[30px] px-2">
            Publicity
          </span>{" "}
          to your brands!
        </p>
        <p className="text-[20px]">
          "Innovative IT solutions designed to drive your business forward with
          reliability and efficiency."
        </p>
      </div>
    </div>
  );
}
