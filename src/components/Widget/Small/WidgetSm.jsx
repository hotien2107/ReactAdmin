import "./WidgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm(props) {
    return (
        <div className={"WidgetSm " + props.addClassName }>
            <span className="WidgetSmTitle">New Join Member</span>

            <div className="WidgetSmMember">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFFfk_DwnLUGoqvYENmr-BnuYYcJhSlAO5w&usqp=CAU" alt="" className="WidgetSmMemberAvt" />
                <div className="WidgetSmMemberInfo">
                    <div className="WidgetSmMemberName">Hồ Hoàng Việt Tiến</div>
                    <div className="WidgetSmMemberJob">Front-end Developer</div>
                </div>
                <button className="WidgetSmDisplay">
                    <Visibility className="WidgetSmIcon"/>
                    Display
                </button>
            </div>

            <div className="WidgetSmMember">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFFfk_DwnLUGoqvYENmr-BnuYYcJhSlAO5w&usqp=CAU" alt="" className="WidgetSmMemberAvt" />
                <div className="WidgetSmMemberInfo">
                    <div className="WidgetSmMemberName">Hồ Hoàng Việt Tiến</div>
                    <div className="WidgetSmMemberJob">Front-end Developer</div>
                </div>
                <button className="WidgetSmDisplay">
                    <Visibility className="WidgetSmIcon"/>
                    Display
                </button>
            </div>

            <div className="WidgetSmMember">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFFfk_DwnLUGoqvYENmr-BnuYYcJhSlAO5w&usqp=CAU" alt="" className="WidgetSmMemberAvt" />
                <div className="WidgetSmMemberInfo">
                    <div className="WidgetSmMemberName">Hồ Hoàng Việt Tiến</div>
                    <div className="WidgetSmMemberJob">Front-end Developer</div>
                </div>
                <button className="WidgetSmDisplay">
                    <Visibility className="WidgetSmIcon"/>
                    Display
                </button>
            </div>

            <div className="WidgetSmMember">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFFfk_DwnLUGoqvYENmr-BnuYYcJhSlAO5w&usqp=CAU" alt="" className="WidgetSmMemberAvt" />
                <div className="WidgetSmMemberInfo">
                    <div className="WidgetSmMemberName">Hồ Hoàng Việt Tiến</div>
                    <div className="WidgetSmMemberJob">Front-end Developer</div>
                </div>
                <button className="WidgetSmDisplay">
                    <Visibility className="WidgetSmIcon"/>
                    Display
                </button>
            </div>

            <div className="WidgetSmMember">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFFfk_DwnLUGoqvYENmr-BnuYYcJhSlAO5w&usqp=CAU" alt="" className="WidgetSmMemberAvt" />
                <div className="WidgetSmMemberInfo">
                    <div className="WidgetSmMemberName">Hồ Hoàng Việt Tiến</div>
                    <div className="WidgetSmMemberJob">Front-end Developer</div>
                </div>
                <button className="WidgetSmDisplay">
                    <Visibility className="WidgetSmIcon"/>
                    Display
                </button>
            </div>

        </div>
    )
}
