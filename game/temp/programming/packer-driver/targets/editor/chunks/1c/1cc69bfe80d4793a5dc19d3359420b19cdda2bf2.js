System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, obstacleManager, RoadManager, _crd;

  function _reportPossibleCrUseOfobstacleManager(extras) {
    _reporterNs.report("obstacleManager", "./ObstacleManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "./PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadController(extras) {
    _reporterNs.report("RoadController", "../controllers/RoadController", _context.meta, extras);
  }

  _export("RoadManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      obstacleManager = _unresolved_2.obstacleManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5ca7cPmKcZEtqGuVcXkWseb", "RoadManager", undefined); //道路全局管理器


      __checkObsolete__(['Prefab', 'Vec3', 'instantiate', 'Node']);

      _export("RoadManager", RoadManager = class RoadManager {
        constructor() {
          this.obstaclemanager = void 0;
          this.thisroadName = void 0;
          this.playerManager = void 0;
          //生成三个或四个道路
          this.currentRoad = [];
          //当前道路 把第一个拿出来变成可复用道路
          this.multiplexRoad = void 0;
          //可复用道路
          this.cloneName = void 0;
          this.leftRoad = void 0;
          this.rightRoad = void 0;
          this.IsMoving = void 0;
          this.RoadController = void 0;
          this.obstaclemanager = (_crd && obstacleManager === void 0 ? (_reportPossibleCrUseOfobstacleManager({
            error: Error()
          }), obstacleManager) : obstacleManager).getInstance();
          this.IsMoving = false;
        }

        static getInstance() {
          if (!RoadManager.instance) {
            RoadManager.instance = new RoadManager();
          }

          return RoadManager.instance;
        }

        set setRoadControllerClass(e) {
          this.RoadController = e;
        }

        setIsMoving(n) {
          if (this.RoadController) {
            this.RoadController.setIsMoving(n);
          }

          this.IsMoving = this.RoadController.setIsMoving(n);
        }

        get isMoving() {
          return this.IsMoving;
        }

        set leftR(e) {
          this.leftRoad = e;
        }

        set rightR(e) {
          this.rightRoad = e;
        }

        get leftR() {
          return this.leftRoad;
        }

        get rightR() {
          return this.rightRoad;
        } // 开局初始化并分配所有道路


        initSetRoad(prefab, segmentCount, isCharacterPosition, parentNode) {
          for (let i = 0; i < segmentCount; i++) {
            const segment = instantiate(prefab);
            parentNode.addChild(segment);
            segment.setPosition(0, 0, isCharacterPosition.z + i * 384);
            this.currentRoad.push(segment);

            if (i > 0) {
              this.obstaclemanager.randomoObstacle(segment);
            }
          }
        }

        setRoads() {
          //玩家每走到第二个道就删掉第一个放入到复用里
          this.multiplexRoad = this.currentRoad[0];
          this.currentRoad.shift();
          this.multiplexRoad.setPosition(0, 0, this.currentRoad[0].worldPosition.z + 1152);
          this.currentRoad.push(this.multiplexRoad);
          let children = this.multiplexRoad.children[3];

          if (children) {
            children.removeAllChildren();
          }

          this.obstaclemanager.randomoObstacle(this.multiplexRoad);
        }

        get currentroad() {
          return this.currentRoad;
        }

        setRoadName(name = null) {
          if (name) {
            this.RoadName = name;
          }

          ;

          if (this.RoadName == 'road') {
            this.leftR = this.currentroad[0].children[1];
            this.rightR = this.currentroad[0].children[2];
          } else if (this.RoadName == 'roadLeft') {
            this.leftR = null;
            this.rightR = this.currentroad[0].children[0];
          } else if (this.RoadName == 'roadRight') {
            this.leftR = this.currentroad[0].children[0];
            this.rightR = null;
          }
        }

        saveName(e) {
          this.cloneName = this.thisroadName;
          this.thisroadName = e.name;
        }

        get RoadName() {
          return this.thisroadName;
        }

        set RoadName(e) {
          this.thisroadName = e;
        }

      });

      RoadManager.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1cc69bfe80d4793a5dc19d3359420b19cdda2bf2.js.map