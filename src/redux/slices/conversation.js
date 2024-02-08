import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import { convertLegacyOperators } from "@mui/x-data-grid/internals";
import { ControlPointDuplicateRounded } from "@mui/icons-material";

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
    },
});

export default slice.reducer;

export const FetchDirectConversations = ({data}) => {          
    return async (dispatch, getState) => {           
        dispatch(slice.actions.fetchDirectConversations({conversations: data}));
    }
}