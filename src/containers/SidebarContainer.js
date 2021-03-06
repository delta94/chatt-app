import { connect } from 'react-redux';
import { changeCurrentChat } from '../actions/currentChatActions';
import { loadMessage } from '../actions/messageActions';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
    sign: state.sign,
    channel: state.channel,
    conversation: state.conversation
});

const mapDispatchToProps = (dispatch) => ({
    changeCurrentChat: (currChatObj) => dispatch(changeCurrentChat(currChatObj)),
    loadMessage: (listChatObj) => dispatch(loadMessage(listChatObj))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);