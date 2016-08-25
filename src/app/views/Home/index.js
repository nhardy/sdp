import React, { Component } from 'react';
import Helmet from 'react-helmet';

import config from 'app/config';
import DefaultLayout from 'app/layouts/Default';

import styles from './styles.styl';


export default class ErrorView extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DefaultLayout className={styles.root}>
        <Helmet title="Login | UTS: HELPS Booking System" />
        <form method="POST" action="/api/sso/login">
          <input type="hidden" name="client" value={config.sso.client} />
          <h1>Login</h1>
          <label htmlFor="username">Staff or student number</label>
          <input type="text" id="username" name="username" autoFocus />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <a href="https://email.itd.uts.edu.au/webapps/myaccount/passwordreset/" target="_blank">Forgot password?</a>
          <input type="submit" value="Login" />
        </form>
        <h1>Test</h1>
        <p>This is an example paragraph</p>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis velit et orci accumsan aliquam. Suspendisse quis elit metus. Aenean ultrices diam erat, eget blandit ipsum porta a. Morbi aliquet dignissim augue ac sollicitudin. Etiam et elit sed mauris mattis tincidunt. Etiam non dolor blandit, blandit ipsum vel, rutrum leo. Duis semper odio ante. Fusce a hendrerit augue. Sed et lectus porta nunc volutpat semper. Proin ornare efficitur elementum. Cras convallis, leo et mollis lobortis, quam odio congue eros, nec porta lorem risus ut purus. Fusce vel quam arcu. Morbi vel ligula venenatis diam congue maximus. Nulla eu felis tellus. Nullam ac blandit lorem. Integer viverra ipsum eget lacus rhoncus porttitor id non tellus.

          Phasellus egestas metus enim, eget malesuada dolor elementum nec. Donec fringilla, dui vitae feugiat cursus, mauris neque egestas ipsum, eget convallis dui ante sit amet tortor. Cras dolor urna, fringilla vel gravida vel, sodales at augue. Ut lectus turpis, elementum a tincidunt at, semper ac ipsum. Quisque nunc est, lacinia sit amet massa laoreet, commodo pharetra magna. Aliquam molestie ipsum tincidunt, rutrum dolor ac, dapibus lorem. Phasellus felis mauris, suscipit vitae accumsan vehicula, lacinia non erat. Phasellus cursus dui nec mi vehicula commodo. Nullam ultricies ipsum et risus tempus malesuada. Ut vel ligula sed leo congue faucibus vel non ligula. Morbi sodales mattis quam, sed accumsan purus aliquam eget. Etiam nisi mi, hendrerit sit amet volutpat sed, consectetur at est. Proin egestas nec mi et suscipit. Nulla gravida eleifend gravida. Ut id nisl porta, consectetur nibh eu, cursus arcu. Ut at ornare nunc.

          Fusce lacinia elit ut ex porttitor egestas eu sit amet neque. Aenean aliquam sapien eget eros ultrices tempor. Praesent ultricies non felis eu cursus. Suspendisse non lectus id dui commodo porta non ut massa. Praesent ultrices molestie diam semper molestie. Pellentesque porta rhoncus aliquet. Ut consectetur tellus at risus vehicula egestas. Proin hendrerit massa quis massa elementum, sit amet euismod risus venenatis. Ut id risus id urna semper tempus id ut augue. Vivamus bibendum dui a metus sollicitudin, ac pellentesque ipsum fringilla. Aliquam vitae fringilla risus, vitae suscipit est. Nam sed ultricies mi. Maecenas condimentum neque porta magna posuere, quis congue neque cursus. Phasellus eget ullamcorper libero. Proin eget lectus egestas, scelerisque turpis et, maximus diam. Nullam accumsan tristique arcu, eu molestie leo tincidunt sed.

          Duis condimentum elit non accumsan gravida. Nulla mattis venenatis nulla in vehicula. Duis et tincidunt libero. Aliquam non nisi at risus luctus efficitur in in magna. Aliquam pulvinar convallis imperdiet. Integer tincidunt ipsum non tristique facilisis. Vivamus egestas arcu vel ipsum bibendum, non fermentum urna lacinia. Nullam scelerisque sapien sit amet rhoncus luctus. In pharetra magna in lorem rhoncus fermentum.

          Mauris quis lacus sit amet leo sodales lacinia. Ut sollicitudin pharetra vehicula. Aenean pretium ligula ut ligula tristique, at tempus nisl aliquam. Aenean ac venenatis lectus. Suspendisse potenti. Proin suscipit, nibh quis vestibulum ornare, urna dolor semper odio, dignissim imperdiet leo lectus ac felis. Duis et tempus ante, id dictum nulla.

          Sed ut pretium nibh. Vestibulum laoreet lectus sed arcu imperdiet fringilla. Pellentesque fermentum, felis nec pharetra egestas, dui odio accumsan leo, et sodales enim nisl at libero. Cras in libero imperdiet, sagittis ante vel, posuere elit. Fusce a lorem eleifend, tincidunt purus at, luctus nulla. Fusce in tempus dui. Nullam vel semper diam, eu sodales est. Vivamus nisi nulla, lobortis non ligula sed, sodales convallis lacus. Vivamus scelerisque quam eu viverra gravida. Nullam vulputate mauris diam. Mauris maximus blandit erat, vitae condimentum nisi lacinia in. Aliquam eget convallis velit. Ut metus eros, pharetra eget libero nec, cursus ultricies nibh. Nullam purus augue, rutrum vitae pulvinar bibendum, lobortis in est. Aliquam viverra diam id cursus volutpat. Aliquam condimentum nec elit vitae rutrum.

          Sed auctor dignissim ligula non congue. Cras sagittis justo eu tellus facilisis, at euismod est consequat. Integer euismod consequat magna in viverra. Sed pellentesque diam augue. Cras eget leo diam. Nam tincidunt lorem ac pellentesque auctor. Duis sollicitudin accumsan ligula nec luctus. In quis velit eu justo fermentum dictum. Curabitur laoreet pellentesque orci, in pellentesque sem consectetur facilisis. Aenean mollis elementum eros ut porttitor. Curabitur lobortis suscipit sem, ut malesuada ipsum pharetra in. Aliquam erat volutpat. Proin ac tempor ante, ut venenatis leo.

          Sed facilisis ex a ligula fermentum finibus. Praesent a venenatis turpis. Nam volutpat elit dolor, vel maximus lorem convallis mattis. Nam sagittis a eros at sodales. Morbi vitae ornare mauris, quis auctor enim. Mauris feugiat nunc nec dolor venenatis, quis accumsan diam aliquam. Aliquam posuere ut enim tincidunt malesuada. Sed turpis ligula, feugiat quis rhoncus pulvinar, pretium a urna. Curabitur posuere sodales lacus nec lacinia. Phasellus tempus nisi quis mi interdum, id mollis nisl porta.

          Sed id eleifend nulla. Pellentesque porttitor tempor mi a vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum et erat lobortis, mollis velit at, vehicula nibh. Sed odio est, vehicula sed rhoncus eu, vulputate quis felis. Aliquam eget tempus nisi, quis condimentum orci. Mauris id efficitur odio.

          Praesent ut rhoncus ex, ut pretium dolor. Pellentesque pretium ullamcorper cursus. Pellentesque elementum, mi in viverra cursus, arcu ante sollicitudin elit, id rutrum sem nulla eget ante. Sed tincidunt efficitur nibh eget sagittis. Aliquam lobortis erat quis molestie molestie. Cras accumsan lectus ut ipsum ultrices, nec volutpat sem porttitor. Duis enim tellus, malesuada in augue ut, volutpat varius lectus. Integer in aliquam neque.

          Nulla volutpat id magna non ultricies. In sagittis tempus elit nec dapibus. In molestie, arcu vitae scelerisque tempus, sapien dolor cursus urna, vitae tincidunt nunc eros nec eros. Sed nisi arcu, vestibulum vitae arcu ac, lacinia consequat nisi. Mauris vulputate tempus tortor at tempor. Cras non ultrices augue. Integer malesuada tempor metus, interdum varius nulla ullamcorper vel. Sed et sodales quam, nec dignissim mi.

          Vivamus ultricies libero sed lobortis vulputate. Ut sagittis augue a augue lobortis vulputate. Donec sed placerat dui. Donec vulputate sodales volutpat. Maecenas vehicula dapibus libero, non rhoncus tellus tincidunt id. Ut at felis nec mi varius tincidunt. Etiam efficitur nisl sed efficitur viverra. Etiam ut tempor turpis, a commodo tortor. Proin molestie, sem quis sollicitudin laoreet, tellus orci suscipit sem, vitae congue urna elit in quam. Vivamus quis mauris non augue finibus pretium ut non magna. Donec ac tellus a urna sodales volutpat eget vel magna. Morbi ultrices neque sed libero dignissim sagittis.

          Proin eget molestie mi. Nullam laoreet metus elit, sed feugiat purus ornare sit amet. Aliquam condimentum, enim in pellentesque mattis, nibh justo facilisis leo, quis ullamcorper nibh quam tincidunt diam. Pellentesque vel nisl ultricies, vestibulum elit sed, ultrices ante. Proin ut massa interdum, vehicula ligula et, lobortis mi. Aliquam erat volutpat. Phasellus ex sem, placerat ac erat nec, malesuada aliquam ante.

          Duis id est eu augue tincidunt sagittis. Sed augue lectus, posuere eu libero et, scelerisque lobortis quam. Sed aliquet nunc luctus, lacinia velit at, tempus ligula. Donec sit amet quam et ex convallis scelerisque et sit amet nunc. Mauris laoreet sodales nibh non vehicula. Aliquam diam metus, egestas in justo et, porta ornare velit. Sed et hendrerit lectus. Phasellus lobortis nec purus in cursus.

          Curabitur lobortis leo sed magna auctor pharetra. Nam convallis mauris eu odio vulputate, id condimentum nisi rutrum. Suspendisse facilisis varius bibendum. Nunc eget laoreet nunc. Aenean ut lacus tortor. Suspendisse egestas tempor aliquam. Etiam rhoncus, lectus sed imperdiet auctor, arcu augue viverra lorem, vitae blandit lectus ante eget enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eget placerat dui. Donec dapibus lobortis aliquam. Mauris hendrerit venenatis libero, vel porta lorem. Maecenas commodo dapibus felis ac imperdiet.
        </div>
      </DefaultLayout>
    );
  }
}
