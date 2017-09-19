import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../server/event-bus.service'

@Component({
  selector: 'mod-recommend',
  templateUrl: './mod-recommend.component.html',
  styleUrls: ['./mod-recommend.component.css']
})
export class ModRecommendComponent implements OnInit {

  public modItemArr:Array<any> = [
    {
      price:289.00,
      describe:'西部数据(WD)蓝盘 1TB SATA6Gb/s 7200转64M 台式机硬盘(WD10EZEX)',
      imgSrc:'../../../assets/imgs/modItem1.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:99.00,
      describe:'TP-LINK TL-WR886N 450M无线路由器（宝蓝） 智能路由 WIFI无线穿墙',
      imgSrc:'../../../assets/imgs/modItem2.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'19.90',
      describe:'丽家家居 礼品门垫浴室垫子进门脚垫防滑地垫 花色随机 尺寸随机 礼品门垫 花色随机发 花色和尺寸都随机',
      imgSrc:'../../../assets/imgs/modItem3.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'35.90',
      describe:'蒙牛 纯牛奶 PURE MILK 250ml*16盒',
      imgSrc:'../../../assets/imgs/modItem4.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'49.90',
      describe:'福临门 东北优质 大米 8kg',
      imgSrc:'../../../assets/imgs/modItem5.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'52.50',
      describe:'统一 阿萨姆奶茶500ml*15瓶 整箱',
      imgSrc:'../../../assets/imgs/modItem6.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'55.00',
      describe:'水星（MERCURY）MW325R 300M智能wifi无线路由器增强四天线',
      imgSrc:'../../../assets/imgs/modItem7.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'15.90',
      describe:'韩国 东远 金枪鱼罐头 沙拉酱味100g*2罐',
      imgSrc:'../../../assets/imgs/modItem8.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'39.90',
      describe:'福临门 五常长粒香 五常大米 中粮出品 大米 5kg',
      imgSrc:'../../../assets/imgs/modItem9.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    },
    {
      price:'3399.00',
      describe:'三星 Galaxy S7 edge（G9350）4GB+32GB 铂光金 移动联通电信4G手机 双卡双待',
      imgSrc:'../../../assets/imgs/modItem10.jpg',
      choices:{
        name:'系列',
        arr:[
          '成为技术领导制',
          '程序开发心理学',
          '颠覆完美软件'
        ]
      }
    }
  ];
  constructor(public eventServiceBus:EventBusService) { }

  ngOnInit() {
    this.eventServiceBus.eventBus.subscribe((value)=>{
      let item = this.modItemArr.find((item)=>{
        return item.imgSrc == value.imgSrc;
      });
      let index = this.modItemArr.indexOf(item);
      this.modItemArr.splice(index,1);
    })
  }

}
