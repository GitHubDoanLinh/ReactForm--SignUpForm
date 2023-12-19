import React, {useState} from "react";
import "./App.css"

export default function App() {
    let [form, setForm] = useState({})

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        const isValid =
            form.username && form.email && form.password && form.confirmPassword;
        alert(
            isValid ? "Signup successfully " : "Please fill out all fields !!!"
        );
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <div className={"custom-input"}>
                    <label>User Name : </label>
                    <input name={"username"}
                           value={form.username || ""}
                           onChange={handleChange}/>
                </div>
                <div className={"custom-input"}>
                    <label>Email : </label>
                    <input name={"email"}
                           value={form.email || ""}
                           onChange={handleChange}/>
                </div>
                <div className={"custom-input"}>
                    <label>Password : </label>
                    <input
                        type={"password"}
                        name={"password"}
                        value={form.password || ""}
                        onChange={handleChange}/>
                </div>
                <div className={"custom-input"}>
                    <label>Confirm Password : </label>
                    <input
                        type={"password"}
                        name={"confirmPassword"}
                        value={form.confirmPassword || ""}
                        onChange={handleChange}/>
                </div>
                <input type={"submit"} onClick={handleSubmit} value={"Submit"} />
            </form>
        </div>
    );
}