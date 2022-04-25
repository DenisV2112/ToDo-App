import React, { Profiler } from "react";
import {BodyItems} from "./BodyNabvar"

export default function BodyNabvar() {
    return (
        <div className="BodyItems">{BodyItems.map((item, index) => {
             return (
                <div key={index}>
                 <a className={item.cName} href={item.url} >
                    {item.Title}
                  </a>
                </div>
             );
           })}
            </div>    
    );
  }