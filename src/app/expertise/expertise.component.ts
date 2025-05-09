import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-expertise",
  templateUrl: "./expertise.component.html",
  styleUrls: ["./expertise.component.css"],
})
export class ExpertiseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  activeTab = "Chemistry";

  tabs = [
    {
      id: "Chemistry",
      label: "Chemistry",
      title: "Content for Tab 1",
      content: "This is the content for the first tab.",
      align: "left",
    },
    {
      id: "Technologies",
      label: "Technologies",
       title: "Content for Tab 1",
      content: "This is the content for the first tab.",
      align: "left",
    },
    {
      id: "R & D",
      label: "R & D",
       title: "Content for Tab 1",
      content: "This is the content for the first tab.",
      align: "left"
    },
  ];

  selectTab(tabId: string) {
    this.activeTab = tabId;
  }
}
