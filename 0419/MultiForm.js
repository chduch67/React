import React, { Component } from 'react';
import './multiForm.css';

export default class MultiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '홍길동',
      age: 300,
      hobby: '개발'
    };

    // 메서드를 바인딩합니다.
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  // 값이 변경됐을 때
  doChange(e) {
    const userValue = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: userValue });
  }

  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    e.preventDefault();
    const j = JSON.stringify(this.state);
    window.alert(j);
  }

  // 화면 렌더링
  render() {
    return (
      <form onSubmit={this.doSubmit}>
        <div>
          <label>
            이름: <br />
            <input
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.doChange}
            />
          </label>
        </div>
        <div>
          <label>
            나이: <br />
            <input
              name='age'
              type='number'
              value={this.state.age}
              onChange={this.doChange}
            />
          </label>
        </div>
        <div>
          <label>
            취미: <br />
            <input
              name='hobby'
              type='text'
              value={this.state.hobby}
              onChange={this.doChange}
            />
          </label>
        </div>
        <input type='submit' value='전송' />
      </form>
    );
  }
}
