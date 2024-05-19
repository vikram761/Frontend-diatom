"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CollapsibleData, Image } from "@/pages/Accordian";
import { FC } from "react";



interface Collapsible {
  setShowImage : React.Dispatch<React.SetStateAction<Image>>;
  collapsibleData : CollapsibleData[];
}




const Collapsible : FC<Collapsible> = ({setShowImage,collapsibleData}) => {
  
  return (
    <Accordion type="single" collapsible className="w-full">
      {collapsibleData.map(data => {
        return (
          <AccordionItem value={data.value} key={data.value} className="group" onClick={() => setShowImage(data.image_value)}>
            <AccordionTrigger className="text-2xl group-hover:text-teal-600 duration-150 delay-150 transition-colors">{data.trigger}</AccordionTrigger>
            <AccordionContent className="text-lg monts">{data.content}</AccordionContent>
          </AccordionItem>
        )
      })}
   </Accordion>        
  )
}

export default Collapsible;
