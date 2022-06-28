import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import CourseContent from './components/CourseContent.jsx';
// import courseData from './tests/test.js';
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    // let courseData = [{"title":"Assimilated asynchronous customer loyalty","sectionNumber":1,"entries":[{"name":"Talk by Nikki Batz","entryNumber":1},{"name":"Talk by Frieda Rolfson","entryNumber":2},{"name":"Talk by Ford Konopelski","entryNumber":3},{"name":"Talk by Jaclyn Bode","entryNumber":4},{"name":"Talk by Weldon Lockman","entryNumber":5},{"name":"Talk by Coleman Koepp","entryNumber":6}]},{"title":"Monitored actuating installation","sectionNumber":2,"entries":[{"name":"Talk by Kaylie Kuhic","entryNumber":1},{"name":"Talk by Abelardo Jacobson III","entryNumber":2},{"name":"Talk by Milford Rempel","entryNumber":3},{"name":"Talk by Mr. Violet Kshlerin","entryNumber":4},{"name":"Talk by Dr. Hailie Jaskolski","entryNumber":5},{"name":"Talk by Andre Hagenes","entryNumber":6},{"name":"Talk by Nicklaus Cremin","entryNumber":7}]}]
    // console.log(courseData)
    let news = [{"title": "Sage Lyf website is being created", "number": 5, "image": "./bless.jpg"}]
    let menuBar = [{"Designs": [], "Clothing": [], "Blog":{"Stories":[], "Poetry": [], "Songs": ""}}]
    this.state = {
      news: news,
      newsEntryState: [],
      expanded: false,
      newsCount: 0,
      menuBar: menuBar
    };
    this.updateNewsStates = this.updatedNewsStates.bind(this);
    this.expandClickHandler = this.expandClickHandler.bind(this);


    // this.state.lectureCount = currLectureCount
    // this.setTime();
    // this.setMinutes();

    /* */

    console.log("Fire", this.state.MenuBar);
  }

  setTime() {

    this.state.lectureCount = _.reduce(this.state.courseData,
      (accum, curr) => {
        // console.log(curr.entries.length, accum)
        return accum + curr.entries.length;
      },0);

    this.state.totalLectureDuration =
    _.reduce(this.state.courseData, (accum, curr) =>
      (accum + _.reduce(curr.entries, (a,c) => (a + c.duration),0))
    ,0);
  }

  setMinutes() {
    // let minutes = this.state.totalLectureDuration;
    // let hours = Math.floor(minutes/60);
    // minutes = minutes - hours*60;
    // console.log(minutes);
    // this.state.minutes = minutes < 10 ? "0"+minutes : "" + minutes;
    // this.state.hours=  hours < 10 ? "0"+hours : "" + hours;
  }



  componentDidMount(){
    let currNewsCount = _.reduce(this.state.news,
      (accum, curr) => {
        // console.log(curr.entries.length, accum)
        return accum + curr.number;
      },0);

    this.setState({newsCount: currNewsCount});
  }

  updatedNewsStates(setState) {
    this.state.newsEntryStates.push(setState);
  }
  expandClickHandler() {
    let setStates = this.state.newsEntryState;
    
    for(let stateSetter of setStates){
      stateSetter((prevState, props)=>{
        return {"hidden": !this.state.expanded};
      });
    }
    this.setState((prevState, props)=>{
      return {"expanded": !prevState.expanded};
    });  
  }

  componentDidMount(){
    console.log;
  }

  // fetchBlogPosts() {
  //   $.get('/api/blogs', (data) => {
  //     this.setState({'data': data});
  //     console.log(data)
  //   })

  // }
  render(){
    return (
      <div className = "app-container">
        <div className = "app-header">
          <span className = "header-title" > SageLyf </span>
          <br></br>
          <div className = "testMessage">Bless</div> 
        </div>
      </div>
    );
  }
}

export default App;
