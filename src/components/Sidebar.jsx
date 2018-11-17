import React, {Component} from 'react';
import photo from '../assets/stevencox.jpg';
import './Sidebar.css'

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="sidebar">
          <img src={photo} className="sidebar-photo"/>
          <div className="intro">
            <p>Welcome to my personal blog. I am currently Fujitsu’s ambassador for Diversity and Inclusion and have a passion for finding organisational best practice, and how learnings from them can be shared.</p>
            <p>I’ve had an extensive career in the technology sector and I am fascinated by how technological advances in automation and artificial intelligence impact the modern workforce and in particular what it means for increasing workplace inclusion and workforce diversity.</p>
            <p>I’m an executive sponsor of Shine, Fujitsu’s LGBT+ and ally networking group. In 2017 Fujitsu UK was ranked number 48 in Stonewall’s equality index as a result of its work around inclusion.</p>
            <p>I have featured on the OUTstanding/Financial Times LGBT top executives list and The Times top 50 LGBT executives in Business List. I am proud to be a Stonewall Ambassador.</p>
          </div>
        </div>
      </>
    )
  }
}