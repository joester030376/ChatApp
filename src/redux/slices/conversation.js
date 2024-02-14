import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
    direct_chat: {
        conversations: [],
        current_conversation: null,
        current_messages: [],
    },
    group_chat: {

    },
};

const slice = createSlice({
    name: "conversation",
    initialState,
    reducers: {
        fetchDirectConversations(state, action) {
            console.log(action.payload);            

            const list = action.payload.conversations.map((el) => {
                console.log("These are the participants: ", el.participants[0]._id);
                const this_user = el.participants.find(
                    (elm) => elm._id.toString() !== user_id
                );

                    console.log(this_user);

                    
                        return {
                            id: el._id,
                            user_id: this_user._id,
                            name: `${this_user.firstName} ${this_user.lastName}`,
                            online: this_user.status === "Online",
                            img: faker.image.avatar(),
                            msg: faker.music.songName(),
                            time: "9:36",
                            unread: 0,
                            pinned: false
                          }
                  
            });
            
            state.direct_chat.conversations = list;
        },
        updateDirectConversation(state, action) {
            // data = {}
            // list = list.map((el) => el.id === data._id ? data : el)
            const this_conversation = action.payload.conversation;
            state.direct_chat.conversations = state.direct_chat.conversations.map((el) => {
                if(el.id !== this.conversation._id) {
                    return el;
                } else {
                    const user = this_conversation.participants.find((elm) => elm._id.toString() !== user_id)
                    
                    return {
                        id: this_conversation._id,
                        user_id: user._id,
                        name: `${user.firstName} ${user.lastName}`,
                        online: user.status === "Online",
                        img: faker.image.avatar(),
                        msg: faker.music.songName(),
                        time: "9:36",
                        unread: 0,
                        pinned: false
                    }
                }
            })
        },
        addDirectConversation(state, action) {
            // list.push(data)
            const this_conversation = action.payload.conversation;
            const user = this_conversation.participants.find((elm) => elm._id.toString() !== user_id);
            state.direct_chat.conversation.push({
                id: this_conversation._id,
                user_id: user._id,
                name: `${user.firstName} ${user.lastName}`,
                online: user.status === "Online",
                img: faker.image.avatar(),
                msg: faker.music.songName(),
                time: "9:36",
                unread: 0,
                pinned: false
            });
        },
    },
});

export default slice.reducer;

export const FetchDirectConversations = ({data}) => {          
    return async (dispatch, getState) => {           
        dispatch(slice.actions.fetchDirectConversations({conversations: data}));
    };
};

export const AddDirectConversation = ({conversation }) => {          
    return async (dispatch, getState) => {           
        dispatch(slice.actions.addDirectConversation({conversation}));
    };
};

export const UpdateDirectConversation = ({conversation}) => {          
    return async (dispatch, getState) => {           
        dispatch(slice.actions.updateDirectConversation({conversation}));
    };
};

