import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './committee.html',
  styleUrl: './committee.css',
})
export class Committee {

  activeTab: 'organizing' | 'advisory' = 'organizing';

  selectedMemberId: string | null = null;


  selectTab(tab: 'organizing' | 'advisory'): void {

    this.activeTab = tab;

    // Close any open profile when changing tabs
    this.selectedMemberId = null;
  }


  toggleProfile(memberId: string): void {

    if (this.selectedMemberId === memberId) {
      this.selectedMemberId = null;
    } else {
      this.selectedMemberId = memberId;
    }

  }


  organizingCommittee = [
    {
      id: 'CP-01',
      role: 'Chief Patron',
      names: [
        'HONBLE SH. ANIL KUMAR GUPTA, CHAIRMAN, HMRITM'
      ]
    },
    {
      id: 'PA-01',
      role: 'Patrons',
      names: [
        'SH. UMESH K. TYAGI, IAS (R)',
        'PROF. (DR.) V.C. PANDEY, DIRECTOR, HMRITM'
      ]
    },
    {
      id: 'PC-01',
      role: 'Program Chair',
      names: [
        'PROF. (DR.) SHALINI GUPTA, DY. DIRECTOR, HMRITM'
      ]
    },
    {
      id: 'CV-01',
      role: 'Convener',
      names: [
        'DR. MD EHSAN ASGAR, HMRITM'
      ]
    },
    {
      id: 'CC-01',
      role: 'Co-Conveners',
      names: [
        'DR. PRADEEP, HMRITM',
        'MR. ABHENDRA PRATAP SINGH, HMRITM'
      ]
    }
  ];


  advisoryCommittee = [
    {
      id: 'ADV-01',
      name: 'PROF. (DR.) VALENTINA EMILIA BALAS, AUREL VLAICU UNIVERSITY OF ARAD, ROMANIA'
    },
    {
      id: 'ADV-02',
      name: 'DR. BRIJ N. SINGH, JOHN DEERE, UNITED STATES'
    },
    {
      id: 'ADV-03',
      name: 'DR. PRATEEK KUMAR, WASHINGTON STATE UNIVERSITY, UNITED STATES'
    },
    {
      id: 'ADV-04',
      name: 'PROF. (DR.) GARETH HOWELLS, UNIVERSITY OF ESSEX, UNITED KINGDOM'
    },
    {
      id: 'ADV-05',
      name: 'PROF. (DR.) RAVI SHANKAR, IIT DELHI, INDIA'
    },
    {
      id: 'ADV-06',
      name: 'DR. ANURAG SINGH, NIT DELHI, INDIA'
    },
    {
      id: 'ADV-07',
      name: 'DR. DAYANAND, PROGRAM DIRECTOR, IDEX-MINISTRY OF DEFENCE, INDIA'
    },
    {
      id: 'ADV-08',
      name: 'DR. V. K. PANCHAL, FORMER SCIENTIST G, DRDO, INDIA'
    },
    {
      id: 'ADV-09',
      name: 'PROF. (DR.) M. N. HODA, IEEE DELHI SECTION, INDIA'
    },
    {
      id: 'ADV-10',
      name: 'DR. ANURADHA CHUG, USICT, GGSIPU, NEW DELHI, INDIA'
    }
  ];

}