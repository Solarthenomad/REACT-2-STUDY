import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
    render() {
        return (
            <section className = "main">
                <div className = "m_login">
                    <h3>
                        <span>
                            <img src={require("../img/main/log_img.png")} alt = ""/>
                        </span>
                        LOGIN
                    </h3>
                    <div className="log_box">
                        <form onSubmit={this.handleSubmit}>
                            <div className = "in_ty1">

                            </div>

                        </form>
                    </div>
                </div>

            </section>
        )
    }
}