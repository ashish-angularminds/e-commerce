import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {


  ngOnInit(): void {
    let flag = true;

    document.body.addEventListener("mousemove", evt => {
      const mouseX = evt.clientX + 'px';
      const mouseY = evt.clientY + 'px';

      if (flag)
        document.getElementById('gasp')!.style.transform = `translate(${mouseX}, ${mouseY})`;

      document.querySelectorAll(".btn")!.forEach(item => item.addEventListener("mouseenter", () => {
        let a = item.getBoundingClientRect();
        flag = false;
        document.getElementById("gasp")!.style.cssText =
          `height: ${a.height}px; width:${a.width}px;border-radius:2px;transform:translate(${a.x}px, ${a.y}px);top: 0;left: 0;`;
      }));
      document.querySelectorAll(".btn")!.forEach(item => item.addEventListener("mouseout", () => {
        flag = true;
        document.getElementById("gasp")!.style.cssText = 'height: 50px; width:50px; top: -25px;left: -25px;';
      }));
    })
  }

}
