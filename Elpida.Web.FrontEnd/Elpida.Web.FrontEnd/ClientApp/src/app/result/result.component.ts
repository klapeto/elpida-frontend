import {Component, Input, OnInit} from '@angular/core';
import {Result} from "../../models/result";
import {Elpida} from "../../models/elpida";
import {Version} from "../../models/version";
import {Platform} from "../../models/platform";
import {Os} from "../../models/os";
import {System} from "../../models/system";
import {Cpu} from "../../models/cpu";
import {CpuCache} from "../../models/cpu-cache";
import {Topology} from "../../models/topology/topology";
import {CpuNode, NodeType} from "../../models/topology/cpuNode";
import {Memory} from "../../models/memory";
import {BenchmarkResult} from "../../models/benchmark-result";
import {TaskResult} from "../../models/task-result";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result : Result = new Result(
    new Elpida(new Version(0,0,12,0),new Platform(new Os("Linux", "KDE Neon 18.04"))),
    new System(
      new Cpu("AMD", "Threadripper 3990X", 17,12,3,4000000000,true, false, true,
      [new CpuCache("L1i", "8-Way",1000, 8, 64)],["AVX", "AVX2"]),
      new Topology(64,128,10,
        new CpuNode(NodeType.Machine, "Machine",0, null,
          [new CpuNode(NodeType.Package, "Package",0, null,null, null)]
          ,null)),
      new Memory(1136566, 4096)),
    [new BenchmarkResult("Memory Latency", [1,12,23],[new TaskResult("Read Latency", "Read stuff", 38,"ns", 8192)])]
  );

  constructor() {



  }

  ngOnInit() {
  }
}
