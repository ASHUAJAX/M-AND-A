import Link from "next/link";
import React from "react";
import data from "../Navbar/data.json";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  return (
    <div>
      <div className="w-full gap-5 p-10 flex justify-center  bg-slate-800 text-white">
        <div className="basis-1/5">
          <div className="text-3xl font-extrabold text-black bg-primary px-4 p-1 rounded">
            <h1>
              {" "}
              <Link href={data[0].link}>M_&_A</Link>
            </h1>
          </div>
          <p>
            We are a uniform manufacturer, uniform wholesaler and uniform
            supplier of superlative quality uniforms and workwear, providing
            uniform to diverse range of industries like Education, Corporate,
            Health, Hospitality and many more sectors.
          </p>
        </div>
        <div className="basis-1/5">
          <h1 className="text-xl font-bold w-max mb-2  border-dashed border-primary border-b-2">Quick Links</h1>
          <ul>
            {
              data.map((elm,ix)=>(
                <li key={ix}>{">"} <a href={elm.link}>{elm.name}</a></li>
              ))
            }
          </ul>
        </div>
        <div className="basis-1/5">
          <h1 className="text-xl font-bold w-max mb-2  border-dashed border-primary border-b-2">Head Office</h1>
          <p>mahagun mall</p>
        </div>
        <div className="basis-1/5">
          <h1 className="text-xl font-bold w-max mb-2  border-dashed border-primary border-b-2">Quick Links</h1>
          <p><LocalPhoneIcon className="mr-1" /> +91 88158 25951</p>
          <p><EmailIcon className="mr-1" /> info@manda.gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
