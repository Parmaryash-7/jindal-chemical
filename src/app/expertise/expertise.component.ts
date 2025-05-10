import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-expertise",
  templateUrl: "./expertise.component.html",
  styleUrls: ["./expertise.component.css"],
})
export class ExpertiseComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  tabs = [
    {
      id: "Chemistry",
      label: "Chemistry",
    },
    {
      id: "Technologies",
      label: "Technologies",
    },
    {
      id: "R & D",
      label: "R & D",
    },
  ];

  activeTab = this.tabs[0].id;

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const decoded = decodeURIComponent(fragment);
        const targetTab = this.tabs.find(tab => tab.id === decoded);
        if (targetTab) {
          this.activeTab = targetTab.id;
        }
      }
    });
  }

  fragmentToId(fragment: string): string {
    return decodeURIComponent(fragment);
  }

  TECH_LIST = [
    {
      icon: 'assets/images/expertise/amination.png',
      text: 'Amination Technology',
    },
    {
      icon: 'assets/images/expertise/green-chemistry.png',
      text: 'Green Chemistry',
    },
    {
      icon: 'assets/images/expertise/high-vacuum.png',
      text: 'High Vacuum Fractional Distillation',
    },
    {
      icon: 'assets/images/expertise/fermentation-technology.png',
      text: 'Fermentation Technology',
    },
    {
      icon: 'assets/images/expertise/heterocycle.png',
      text: 'Heterocycle Chemistry',
    },
    {
      icon: 'assets/images/expertise/process-automation.png',
      text: 'Process Automation DCS/ SCADA/ PLC',
    },
    {
      icon: 'assets/images/expertise/spray-drying.png',
      text: 'Filtration/ Spray Drying',
    },
    {
      icon: 'assets/images/expertise/high-pressure.png',
      text: 'High Pressure Reaction',
    },
    {
      icon: 'assets/images/expertise/vapour-phase.png',
      text: 'Vapour Phase Technology',
    },
    {
      icon: 'assets/images/expertise/fixed-bed.png',
      text: 'Fixed-Bed Reaction',
    },
  ];

  selectTab(tabId: string) {
    this.activeTab = tabId;
  }
}
