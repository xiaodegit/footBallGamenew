System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, instantiate, obstacleManager, _crd;

  _export("obstacleManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd8d5cdLu9EUpxvbxuLdkSK", "ObstacleManager", undefined); //障碍物全局管理器


      __checkObsolete__(['Vec3', 'Prefab', 'instantiate']);

      _export("obstacleManager", obstacleManager = class obstacleManager {
        constructor() {
          this.obstacles = [];
        }

        static getInstance() {
          if (!obstacleManager.instance) {
            obstacleManager.instance = new obstacleManager();
          }

          return obstacleManager.instance;
        }

        setobstaclePrefab(prefab) {
          for (var i = 0; i < 4; i++) {
            this.obstacles.push(prefab[i]);
          }
        } //随机分配障碍物


        randomoObstacle(segment) {
          //随机位置 前 中 后 5   0  -5  ,  0  ,  20  0  -20
          var randomx = [5.6, 0, -5.6];
          var randomz = [20, 0, -20];
          var positions = []; // 生成所有位置组合

          for (var x of randomx) {
            for (var z of randomz) {
              positions.push(new Vec3(x, 0, z)); // 假设 Y 轴为 0
            }
          } // 打乱位置


          function shuffle(array) {
            for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
            }
          }

          shuffle(positions);

          for (var i = 0; i < 4; i++) {
            var array = this.obstacles;

            if (array) {
              var instantArray = instantiate(array[i]);
              segment.children[3].addChild(instantArray);
              instantArray.setPosition(positions[i]); // 设置随机位置
            }
          }
        }

      });

      obstacleManager.instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=96e08e308c0b39fad9ddba2c811efc7f3eb10678.js.map