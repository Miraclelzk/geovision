# GeoVision 产品主页

网址：https://miraclelzk.github.io/geovision/ （GitHub Pages，`main` 分支根目录）

本仓库只放网页文件：`index.html`、`style.css`、`main.js`、`assets/`。打包、发布、检查脚本在 gv-inspect 仓库的 `tools/release/`。

## 本地预览

```
python -m http.server -d C:\GV\geovision\site 8000
```

浏览器打开 http://localhost:8000/ 。

## 素材

- `assets/icons/`：品牌图标，由 gv-inspect 的 `tools/release/sync_site_assets.ps1` 从 `ui/gv_brand/assets` 同步，不手改。
- `assets/fonts/`：Montserrat 600 拉丁子集（只用于 GEOVISION 字标），SIL OFL 1.1，许可证全文见 `OFL.txt`。
- `assets/shots/`：Viewer 截图，深色主题，窗口 1600×1000，JPEG 质量 85，每张约 300 KB 内。版本更新时按下表重拍（样例在 `C:\GV\不同格式点云\`）：

| 文件 | 内容 | 拍法 |
|---|---|---|
| `hero.jpg` | `01_点云_PointCloud/LAS/autzen_stadium.las` | 只导出视口；背景 `#1d1f24`；透视开；斜俯视 |
| `formats.jpg` | `E57/bunnyDouble.e57` + `02_Mesh网格/STL/stanford_bunny.stl` + `03_数模_CAD/IGES/impeller.igs` | 整窗；目录树里三种类型；斜视 |
| `bigcloud.jpg` | 先开 `03_数模_CAD/STEP/as1-ac-214.stp`，再后台打开 autzen | 整窗；进度条约一半时截 |
| `cad.jpg` | `03_数模_CAD/STEP/as1-ac-214.stp` | 只导出视口；背景 `#1d1f24`；带边线着色；斜视 |
| `ui.jpg` | `03_数模_CAD/STEP/as1-ac-214.stp` | 整窗；浅色主题；选中对象，属性面板展开 |

## 发布 Viewer

在 gv-inspect 里运行 `tools/release/release_viewer.ps1`（先 `-DryRun`）。脚本会把 `index.html` 里 `<!-- release:viewer:begin -->` 与 `<!-- release:viewer:end -->` 之间的下载区改成新版本并推送本仓库；不要手改这一段。
