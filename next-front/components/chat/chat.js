import React, {useEffect, useState} from 'react'
import styles from '../../styles/Chat.module.css'
import io from 'socket.io-client';
import Input from '../ui_items/input'
import Message from './message';
import {useSelector} from 'react-redux'

function useSocket(url, room) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socketIo = io(url)

    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup

    // should only run once and not on every re-render,
    // so pass an empty array
  }, [])

  return socket
}

const Chat = () => {
    const socket = useSocket('http://localhost:1374')
    const room = '12$13';
    const friendId = 13;
    const [messeges, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const user = useSelector(state => state.user)
    const [myId,setMyId] = useState(user.info.id);
    
    useEffect(() => {
        const handleNewMessage = (data) => {
            const pos = data.sender === myId ? 'right' : 'left'
            setMessages(messages => [...messages, {
                message: data.text,
                position: pos
            }]);
        }
        if (socket) {
            socket.emit('joinRoom',room)
            socket.on('message', (data) => {
                console.log(data)
                handleNewMessage(data)
            },)
        }
    }, [socket])

    const handleSubmitNewMessage = (text) => {
        // console.log('hi')
        socket.emit('message', { room: room, text: text, sender: user.info.id })
    }

    return (
        <div className={styles['chat']}>
            <div className={styles['chat_users']}>
                <div className={styles['chat_users_top-sec']}>
                    Messages
                </div>
                <div className={styles['chat_users_input-sec']}>
                    <Input/>
                </div>
            </div>
            <div className={styles['chat_messages']}>
                <div className={styles['chat_messages_top-sec']}>
                    Tymek
                </div>
                <div className={styles['chat_messages-sec']}>
                    <div className={styles['chat_messages-sec_content']}>
                        <Message text={'Hi'} position={'right'}/>
                        <Message text={`Hi`} position={'left'}/>
                        <Message text={'Hi, Whats up?'} position={'right'}/>
                        <Message text={`Hi, yeah i'am fine`} position={'left'}/>
                        <Message text={'nice'} position={'right'}/>
                        {messeges.map((item,key)=>
                            <Message key={key} text={item.message} position={item.position}/>
                        )}
                    </div>
                </div>
                <div className={styles['chat_messages-input']}>
                    <input onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Start new message"/>
                    <div onClick={()=>handleSubmitNewMessage(message)} className={styles['chat_messages-input_button']}>
                        Send
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
