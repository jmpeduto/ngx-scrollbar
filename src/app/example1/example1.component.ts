import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example1Component {
  expanded = true;
  disabled = false;
  longContent = longContent;
  shortContent = shortContent;
}

const shortContent = `
<b>Lorem ipsum dolor sit amet</b>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet mollitia vero quam, nisi possimus dolorem
  asperiores, molestiae sit voluptatibus alias consequuntur laudantium repellat ea quidem quaerat rerum
  perspiciatis iste adipisci.
</p>
`;

const longContent = `
<b>Lorem ipsum dolor sit amet</b>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet mollitia vero quam, nisi possimus dolorem
  asperiores, molestiae sit voluptatibus alias consequuntur laudantium repellat ea quidem quaerat rerum
  perspiciatis iste adipisci.
</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore maiores maxime corrupti
  quisquam.
  Dignissimos sunt error voluptatibus repellat consequatur illo, aliquid nihil maxime veniam repudiandae,
  provident et sit, reiciendis dicta.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae id amet deserunt
  voluptate
  maiores
  sunt
  aut eligendi totam nesciunt magnam illo consectetur aspernatur at voluptatem, qui unde ullam omnis
  voluptates.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id assumenda et fugiat placeat enim
  quas,
  voluptas
  odio aperiam in quibusdam beatae eaque minima. Consequuntur pariatur, doloremque, odit dolorem ullam
  sunt!</p>
`;
