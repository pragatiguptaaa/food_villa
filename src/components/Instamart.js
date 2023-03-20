import React from "react";
import {useState} from "react";

const Section = ({title, description, visible, setVisible}) =>{

return (
    <>
    <div className="border border-black p-2 m-2">
        <h1 className="text-xl font-bold ">{title}</h1>
        <button onClick = {()=> setVisible()}>
            { visible ? "Hide Description": "Show Description"}
        </button>
        {visible && <p>{description}</p>}
    </div>
    </>
)}

const Instamart = () =>{
    const [visibleSection, setVisibleSection] = useState("");
    return(
        <>
           <h1 className="text-3xl p-2 m-2 font-bold"> Welcome to the Instamart page!!!</h1>
           <Section title ="About Instamart" description = "With the rise of internet orders, particularly in the food and grocery industries, in recent years Food Villa has started its latest initiative, Instamart, with the goal of delivering groceries and other necessities.Instamart is a chain of online convenience stores. Instant meals, snacks, fruits and vegetables, ice creams, and other things are available through these virtual convenience stores." 
           visible = {visibleSection === "about"} 
           setVisible = {() => {
                                 if(visibleSection != "about") 
                                    setVisibleSection("about")
                                else 
                                    setVisibleSection("")
                            }
                        }>
           </Section>
           <Section title ="Careers" description = "Careers" 
           visible = {visibleSection === "careers"} 
           setVisible = {() => {
                                if(visibleSection != "careers") 
                                    setVisibleSection("careers")
                                else 
                                    setVisibleSection("")
                                }
                        }>
           </Section>
           <Section title ="Contacts" description = "Instamart Timing: 7 am – 1 am Daily. Customer Care:– 080-6746 1111. Email:- support@foodvilla.in . Website: https://www.foodvilla.com" 
           visible = {visibleSection === "contacts"} 
           setVisible = {() => {
                                    if(visibleSection != "contacts") 
                                        setVisibleSection("contacts")
                                    else 
                                        setVisibleSection("")
                                }
                            }>
           </Section>
        </>
    )
}

export default Instamart;