import React from "react";
import axios from "axios";

import logoaaa from "../../../Main/Image-Icons/aaa.JPG";
import logobbb from "../../../Main/Image-Icons/bbb.JPG";
import logoccc from "../../../Main/Image-Icons/ccc.JPG";
import logoddd from "../../../Main/Image-Icons/ddd.JPG";
import logoeee from "../../../Main/Image-Icons/eee.JPG";
import logofff from "../../../Main/Image-Icons/fff.JPG";
import logoggg from "../../../Main/Image-Icons/ggg.JPG";
import logohhh from "../../../Main/Image-Icons/hhh.JPG";
import logoiii from "../../../Main/Image-Icons/iii.JPG";
import logokkk from "../../../Main/Image-Icons/kkk.JPG";
import logolll from "../../../Main/Image-Icons/lll.JPG";
import logommm from "../../../Main/Image-Icons/mmm.JPG";

export default class TeamsCreateTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setLogoChoose: logoaaa,
      TeamName: "",
      TeamDescription: "",
      checkValidate: ""
    };
  }

  handleChooseLogo = event => {
    const chooseLogo = event.target.value;
    switch (chooseLogo) {
      case "logoaaa":
        this.setState({
          setLogoChoose: logoaaa
        });
        break;
      case "logobbb":
        this.setState({
          setLogoChoose: logobbb
        });
        break;

      case "logoccc":
        this.setState({
          setLogoChoose: logoccc
        });
        break;

      case "logoddd":
        this.setState({
          setLogoChoose: logoddd
        });
        break;
      case "logoeee":
        this.setState({
          setLogoChoose: logoeee
        });
        break;
      case "logofff":
        this.setState({
          setLogoChoose: logofff
        });
        break;

      case "logoggg":
        this.setState({
          setLogoChoose: logoggg
        });
        break;

      case "logohhh":
        this.setState({
          setLogoChoose: logohhh
        });
        break;
      case "logoiii":
        this.setState({
          setLogoChoose: logoiii
        });
        break;
      case "logokkk":
        this.setState({
          setLogoChoose: logokkk
        });
        break;

      case "logolll":
        this.setState({
          setLogoChoose: logolll
        });
        break;

      case "logommm":
        this.setState({
          setLogoChoose: logommm
        });
        break;
      default:
    }
  };

  handleValueCreateNewTeam = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  sentToCreateNewTeam = () => {
    axios
      .post("/createnewteam", {
        TeamName: this.state.TeamName,
        TeamDescription: this.state.TeamDescription,
        TeamLogo: this.state.setLogoChoose,
        MemberID: this.props.MemberID
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          checkValidate: res.data.checkValidate
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleCreateNewTeam = event => {
    this.sentToCreateNewTeam();

    event.preventDefault();
  };

  checkValidateCreateNewTeam = type => {
    switch (type) {
      case "success-create-team":
        return <span>Nh??m c???a b???n ???? ???????c t???o th??nh c??ng !!!</span>;
      case "existed-team":
        return <span>T??n nh??m n??y ???? t???n t???i !!!</span>;
      case "teamname":
        return <small>T??n nh??m kh??ng ???????c ????? tr???ng</small>;
      default:
    }
  };

  renderValidateNotify = type => {
    if (this.state.checkValidate === type) {
      return <div>{this.checkValidateCreateNewTeam(type)}</div>;
    }
  };

  createTeamForm = () => {
    return (
      <div className="user-teams_create">
        <div
          className="user-teams_create__backtoteamall"
          onClick={() => this.props.updateRenderTeamControl("teamall")}
        >
          <div>
            <i className="material-icons"> &#xe5c4;</i>
          </div>
          <div>
            <span>Quay l???i</span>
          </div>
        </div>
        <form onSubmit={event => this.handleCreateNewTeam(event)}>
          <div className="user-teams_create__team">
            <div className="user-teams_create__team___form">
              <div>
                <p>T??n nh??m</p>
                <input
                  type="text"
                  name="TeamName"
                  onChange={event => this.handleValueCreateNewTeam(event)}
                  placeholder="Nh???p t??n nh??m..."
                />
                <p>M?? t???</p>
                <input
                  type="text"
                  name="TeamDescription"
                  onChange={event => this.handleValueCreateNewTeam(event)}
                  placeholder="Nh???p m?? t???..."
                />
                <p>Ch???n ???nh ?????i di???n cho nh??m</p>
                <select onChange={this.handleChooseLogo}>
                  <option value="logoaaa">???nh 1</option>
                  <option value="logobbb">???nh 2</option>
                  <option value="logoccc">???nh 3</option>
                  <option value="logoddd">???nh 4</option>
                  <option value="logoeee">???nh 5</option>
                  <option value="logofff">???nh 6</option>
                  <option value="logoggg">???nh 7</option>
                  <option value="logohhh">???nh 8</option>
                  <option value="logoiii">???nh 9</option>
                  <option value="logokkk">???nh 10</option>
                  <option value="logolll">???nh 11</option>
                  <option value="logommm">???nh 12</option>
                </select>
              </div>
              <div className="user-teams_create__team___response-create-team">
                <div className="user-teams_create__team___validate">
                  {this.renderValidateNotify("teamname")}
                </div>
                {this.renderValidateNotify("success-create-team")}
                {this.renderValidateNotify("existed-team")}
              </div>
              <div className="user-teams_create__team___form____create-button">
                <input type="submit" value="T???o Nh??m" />
              </div>
            </div>

            <div className="user-teams_create__team___logo">
              <div>
                <img alt="team-logo" src={this.state.setLogoChoose} />
              </div>
              <div>
                <p>???nh ?????i di???n nh??m</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return <div>{this.createTeamForm()}</div>;
  }
}
