import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Modal from './Modal'
const FormComponent = () => {
    const [survey, setSurvey] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [link, setLink] = useState("")
    const incQues=(ques)=>{
        setSurvey((prev)=>{
            let newQues=[...prev]
            newQues.push(ques)
            return newQues
        })
    }
   const submitSurvey=async()=>{
       console.log("submitted");
    const res = await fetch("https://survey-app-backend-1234.herokuapp.com/add-survey", {
        headers: {
            'Content-Type': 'application/json',
            'authorization': JSON.stringify(localStorage.getItem('token'))
        },
        method: 'POST',
        body: JSON.stringify({survey,title,desc,link})
    })
    const result = await res.json()
    console.log(result);
    if (result.error) {
        window.alert("Something Went wrong")
    }
    else {
        window.alert("Survey Added")
    }
    setSurvey([])
    setTitle("")
    setDesc("")
    setLink("")
   }
    
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter title of survey" value={title} onChange={(e)=>setTitle(e.target.value)}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Control as="textarea" rows={3} placeholder="Enter Short Description About Survey" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter link to any media related to survey" value={link} onChange={(e)=>setLink(e.target.value)} />
                </Form.Group>
                
                <Modal incQues={incQues} submitSurvey={submitSurvey} disabledBtn={!(title.length>0 && desc.length>0)}/>
            </Form>
        </div>
    )
}

export default FormComponent
