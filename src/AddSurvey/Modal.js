import React, { createRef, useEffect, useRef, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const ModalComponent = ({ incQues, submitSurvey,disabledBtn }) => {
    // const itemEls = useRef(new Array())
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    // const [optionsNum, setOptionsNum] = useState(4)
    const [question, setQuestion] = useState("")
    const [options1, setOptions1] = useState("")
    const [options2, setOptions2] = useState("")
    const [options3, setOptions3] = useState("")
    const [options4, setOptions4] = useState("")
    // useEffect(() => {
    //     // console.log(options);
    //     console.log(itemEls.current);
    // }, [options])
    // const getOptions = (n) => {

    //     let localOptions = []
    //     for (let i = 0; i < n; i++) {
    //         localOptions.push(
    //             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //                 <Form.Control
    //                     value={options[i]}
    //                     onChange={(e) => {
    //                         setOptions((prev) => {
    //                             let previous = [...prev]
    //                             previous[i] = e.target.value
    //                             return previous
    //                         })
    //                     }}
    //                     type="text"
    //                     placeholder={`Option ${i + 1}`} 
    //                     className="options"
    //                     // ref={(element) => itemEls.current.push(element)}
    //                     />
    //             </Form.Group>)
    //     }
    //     return localOptions
    // }
    // const [optionsRender, setOptionsRender] = useState(getOptions(optionsNum))
    // useEffect(() => {
    //     setOptionsRender(getOptions(optionsNum))
    //     setOptions([])
    //     const optionsSubmit=document.getElementsByClassName("options")
    //     for (let i = 0; i < optionsSubmit.length; i++) {
    //           optionsSubmit[i].value=""; 
    //     }
    // }, [optionsNum])
    const submitQues = async() => {
        await incQues({ question, options:[options1,options2,options3,options4] })
        setQuestion("")
        setOptions1("")
        setOptions2("")
        setOptions3("")
        setOptions4("")
        // setOptions([])
        // const optionsSubmit=document.getElementsByClassName("options")
        // for (let i = 0; i < optionsSubmit.length; i++) {
        //       optionsSubmit[i].value=""; 
        // }
    }
    const [submitted, setSubmitted] = useState(false)
    const submit = () => {
        incQues({ question, options:[options1,options2,options3,options4] })
        setShow(false)
        setSubmitted(true)
        setQuestion("")
        setOptions1("")
        setOptions2("")
        setOptions3("")
        setOptions4("")
    }
    useEffect(() => {
        if (submitted) {
            submitSurvey()
            setSubmitted(false)
        }
    }, [submitted])
    useEffect(() => {
        setSubmitted(false)
    }, [])
    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow} disabled={disabledBtn}>
                    Next
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Question For Survey</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                            <Form.Control value={question} onChange={(e) => { setQuestion(e.target.value) }} as="textarea" rows={3} placeholder="Enter Question" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control value={optionsNum} onChange={(e) => { setOptionsNum(e.target.value) }} type="number" placeholder="Enter Number Of Options" />
                        </Form.Group> */}
                        <div className="p-2">
                            Enter Options</div>
                        {/* {optionsRender} */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        value={options1}
                        onChange={(e) => {
                            setOptions1(e.target.value)
                        }}
                        type="text"
                        placeholder={`Option 1`} 
                        className="options"
                        // ref={(element) => itemEls.current.push(element)}
                        />
                </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        value={options2}
                        onChange={(e) => {
                            setOptions2(e.target.value)
                        }}
                        type="text"
                        placeholder={`Option 2`} 
                        className="options"
                        // ref={(element) => itemEls.current.push(element)}
                        />
                </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                       value={options3}
                       onChange={(e) => {
                           setOptions3(e.target.value)
                       }}
                        type="text"
                        placeholder={`Option 3`} 
                        className="options"
                        // ref={(element) => itemEls.current.push(element)}
                        />
                </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        value={options4}
                        onChange={(e) => {
                            setOptions4(e.target.value)
                        }}
                        type="text"
                        placeholder={`Option 4`} 
                        className="options"
                        // ref={(element) => itemEls.current.push(element)}
                        />
                </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={submitQues} >
                            Add More
                        </Button>
                        <Button variant="primary" onClick={submit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default ModalComponent
