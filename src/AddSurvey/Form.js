import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Modal from './Modal'
import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
    comma: 188,
    enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];
const FormComponent = () => {
    const [survey, setSurvey] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [link, setLink] = useState("")
    const [tags, setTags] = useState([])
    const incQues = (ques) => {
        setSurvey((prev) => {
            let newQues = [...prev]
            newQues.push(ques)
            return newQues
        })
    }
    useEffect(() => {
        console.log(tags);
    }, [tags])
    const submitSurvey = async () => {
        const newTags=tags.map((tag)=>{
            return tag.text
        })
        console.log("submitted");
        const res = await fetch("http://localhost:5000/add-survey", {
            headers: {
                'Content-Type': 'application/json',
                'authorization': JSON.stringify(localStorage.getItem('token'))
            },
            method: 'POST',
            body: JSON.stringify({ survey, title, desc, link ,tags:newTags})
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
        setTags([])
    }
    const handleDelete = (i) => {
        setTags((prev) => {
            const newTags = prev.filter((tag, index) => index !== i)
            return newTags
        })
    }
    const handleAddition = (tag) => {
        setTags((prev) => {
            setTags([...prev, tag])
        })
    }
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = [...tags].slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTags(newTags)
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter title of survey" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Control as="textarea" rows={3} placeholder="Enter Short Description About Survey" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Enter link to any media related to survey" value={link} onChange={(e) => setLink(e.target.value)} />
                </Form.Group>
                <ReactTags tags={tags}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    delimiters={delimiters}
                />
                <div className="mt-4"></div>

                <Modal incQues={incQues} submitSurvey={submitSurvey} disabledBtn={!(title.length > 0 && desc.length > 0)} />
            </Form>
        </div>
    )
}

export default FormComponent
