import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  companyName;
  obj = [
    {
      Name: "Google",
      CMMLevel: 5
    },
    {
      Name: "Facebook",
      CMMLevel: 2
    },
    {
      Name: "Amazon",
      CMMLevel: 2
    }
  ];
  addData(data) {
    console.log(data);
    this.obj.push({
      Name: data,
      CMMLevel: 1
    });
  }
  removeData(data) {
    // for (var i = 0; i < this.obj.length; i++) {
    //   if (data.Name === this.obj[i].Name) {
    //     this.obj.slice(0, i);
    //   }
    // }
    var abc = this.obj.filter((val, index) => {
      return val.Name !== data.Name;
    });
    this.obj = abc;
    console.log(this.obj);
  }
}
