import {Result} from "../models/result";
import {Elpida} from "../models/elpida";
import {Version} from "../models/version";
import {Platform} from "../models/platform";
import {Os} from "../models/os";
import {System} from "../models/system";
import {Cpu} from "../models/cpu";
import {CpuCache} from "../models/cpu-cache";
import {Topology} from "../models/topology/topology";
import {CpuNode, NodeType} from "../models/topology/cpuNode";
import {Memory} from "../models/memory";
import {BenchmarkResult} from "../models/benchmark-result";
import {TaskResult} from "../models/task-result";
import {Injectable} from "@angular/core";

@Injectable()
export class DummyDataService {

  public getData(): Result {
    let packageId = 0;
    let machinedId = 0;
    let groupId = 0;
    let numaId = 0;
    let coreId = 0;
    let euId = 0;
    const l1iSize = 64 * 1024;
    const l1dSize = 32 * 1024;
    const l2dSize = 512 * 1024;
    const l3dSize = 8 * 1024 * 1024;
    const numaSize = 32 * 1024 * 1024 * 1024;
    return new Result(
      new Elpida(new Version(0, 0, 12, 0), new Platform(new Os("Linux", "KDE Neon 18.04"))),
      new System(
        new Cpu("AuthenicAMD", "AMD Ryzen Threadripper 1920X 12-Core Processor", 17, 23, 1, 3.5 * 1000000000, true, false, true,
          [
            new CpuCache("L1i", "4-Way", l1iSize, 1, 64),
            new CpuCache("L1D", "8-Way", l1dSize, 1, 64),
            new CpuCache("L2", "8-Way", l2dSize, 1, 64),
            new CpuCache("L3", "32-Way", l2dSize, 1, 64),
          ], ["CMOV", "MMX", "MMX+", "SSE", "SSE2", "SSE3", "SSSE3", "SSE4.1", "SSE4.2", "SSE4A", "FMA", "3DNowPrefetch", "AVX", "AES", "ABM", "F16C", "RDRAND"]),
        new Topology(12, 24, 9,
          new CpuNode(NodeType.Machine, "Machine", machinedId++, null, false,
            [
              new CpuNode(NodeType.Package, "Package", packageId++, null, false, [
                new CpuNode(NodeType.Group, "Group", groupId++, null, false, [
                  new CpuNode(NodeType.L3DCache, "L3D", null, l3dSize, false, [
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, true, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, true, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                  ], null),
                  new CpuNode(NodeType.L3DCache, "L3D", null, l3dSize, false, [
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                  ], null),
                ], [
                  new CpuNode(NodeType.NumaNode, "Numa Node", numaId++, numaSize, false, null, null)
                ]),
                new CpuNode(NodeType.Group, "Group", groupId++, null, false, [
                  new CpuNode(NodeType.L3DCache, "L3D", null, l3dSize, false, [
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                  ], null),
                  new CpuNode(NodeType.L3DCache, "L3D", null, l3dSize, false, [
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                    new CpuNode(NodeType.L2DCache, "L2D", null, l2dSize, false, [
                      new CpuNode(NodeType.L1DCache, "L1D", null, l1dSize, false, [
                        new CpuNode(NodeType.L1ICache, "L1I", null, l1iSize, false, [
                          new CpuNode(NodeType.Core, "Core", coreId++, null, false, [
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                            new CpuNode(NodeType.ExecutionUnit, "EU", euId++, null, false, null, null),
                          ], null),
                        ], null),
                      ], null),
                    ], null),
                  ], null),
                ], [
                  new CpuNode(NodeType.NumaNode, "Numa Node", numaId++, numaSize, false, null, null)
                ]),
              ], null)
            ]
            , null)),
        new Memory(64 * 1024 * 1024 * 1024, 4096)),
      new BenchmarkResult("Memory Latency", [
        new TaskResult("Read Latency", "Read stuff", 6 / 1000 / 1000 / 1000, "s", 256),
        new TaskResult("Read Latency", "Read stuff", 8 / 1000 / 1000 / 1000, "s", 512),
        new TaskResult("Read Latency", "Read stuff", 10 / 1000 / 1000 / 1000, "s", 1024),
        new TaskResult("Read Latency", "Read stuff", 23 / 1000 / 1000 / 1000, "s", 2048),
        new TaskResult("Read Latency", "Read stuff", 38 / 1000 / 1000 / 1000, "s", 4096),
        new TaskResult("Read Latency", "Read stuff", 65 / 1000 / 1000 / 1000, "s", 8192),
      ])
    );
  }
}
