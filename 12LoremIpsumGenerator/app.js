const generate_btn = document.querySelector(".generateP");
const generate_btn_words = document.querySelector(".generateW");
const input_paragraphs = document.querySelector(".paragraphs");
const input_words = document.querySelector(".words");
const output = document.querySelector(".sample");

const text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh purus, cursus sit amet est vitae, volutpat volutpat arcu. Integer sit amet orci et tortor auctor tincidunt ac et nisi. Curabitur arcu urna, commodo quis diam eget, vehicula porta est. Mauris condimentum non elit eu placerat. Pellentesque sit amet feugiat sapien, at convallis quam. Proin sed sem sit amet velit gravida pellentesque ultricies at nisi. Quisque scelerisque lorem lacus, non ultricies neque rhoncus id. Nulla orci nulla, dapibus eu erat et, venenatis scelerisque arcu. Nulla bibendum sapien luctus sapien scelerisque hendrerit.",
  "Sed ullamcorper molestie felis, porta lacinia purus fringilla eget. Nulla et malesuada nibh. Morbi feugiat ac arcu et porttitor. Duis eros nibh, sagittis a nibh non, maximus accumsan odio. Vivamus sed leo sit amet nibh imperdiet lobortis nec sed erat. Nulla convallis blandit erat a tincidunt. Mauris vel aliquet odio. Praesent nec tempus elit. Donec elementum sem quis nisi mollis viverra. Maecenas tempus elit vitae pharetra elementum. Etiam commodo ultrices dapibus. Nullam sit amet sem at metus fringilla lobortis. Duis dolor mauris, commodo vitae porttitor quis, elementum fringilla lectus. Quisque sed eros quis lectus tempor tincidunt at eu purus. Pellentesque quis est iaculis, ultrices enim ut, elementum purus.",
  "Nunc eleifend lorem elit, ac ultrices diam tempor sit amet. Phasellus ut quam luctus, lacinia tellus sit amet, ultricies sem. Aliquam lorem sapien, rutrum eu tristique sed, tristique eu lacus. Vivamus ut ex vel eros condimentum hendrerit. Praesent faucibus sem quis dapibus aliquet. Duis et neque at mi volutpat vehicula sed quis nisi. Sed ut vehicula elit. Etiam vel nisi eros. Sed at nunc lacinia turpis placerat euismod at in nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Proin ornare metus in nisi dignissim, ac fringilla velit bibendum. Sed dolor erat, elementum ut odio ut, pellentesque convallis massa. Donec gravida, dui vitae pretium bibendum, augue massa facilisis lectus, et ultrices massa eros nec sem.",
  "Fusce a imperdiet felis. Integer in ipsum augue. Cras tristique lacus vitae finibus aliquam. Maecenas vel placerat magna. Curabitur tincidunt ante felis, ornare porttitor diam cursus a. Aliquam eu mi ac felis fringilla molestie sed ac quam. Etiam cursus, felis vel rhoncus rutrum, mauris nibh blandit mi, sed sodales lorem mi vel tortor. Vivamus eget ante ac velit dictum hendrerit. Donec ut euismod odio. Praesent posuere neque vitae libero eleifend, ac condimentum felis auctor. Ut nec lobortis augue. Phasellus vehicula turpis augue, a feugiat nisi posuere eget. Maecenas accumsan quam orci, vel cursus lorem pretium ac. Mauris tincidunt elementum elementum. Morbi tempor dolor sit amet sodales consectetur. Integer sollicitudin mi non ullamcorper fermentum.",
  "Nam vel augue at nunc vestibulum varius. Proin convallis cursus porta. Duis in dapibus quam, et congue ipsum. Integer sollicitudin, dui ac congue efficitur, velit neque lobortis erat, tempor viverra turpis massa rutrum ipsum. Morbi ornare, urna sit amet porttitor euismod, turpis nibh fringilla ligula, at vestibulum eros lacus dignissim ex. Maecenas lacinia id dolor nec rhoncus. Morbi odio dolor, mattis id viverra vel, vehicula quis mauris. Mauris mollis auctor sem porta eleifend. Ut semper, quam vitae sagittis interdum, lacus neque posuere libero, in iaculis dolor felis vel lorem. Vestibulum quis ipsum eu ante laoreet consequat et vel neque. Duis vehicula laoreet laoreet. Sed ullamcorper, neque in pellentesque venenatis, est nibh blandit mauris, et ullamcorper velit eros sed mi.",
  "Etiam rutrum felis at tortor rutrum, non fringilla ex imperdiet. Phasellus iaculis efficitur ex, ac porttitor nunc efficitur vitae. Fusce arcu lacus, hendrerit eget velit et, fringilla finibus tellus. Fusce pulvinar venenatis nibh, id interdum turpis luctus eu. Mauris quis tellus sit amet sem ornare convallis a sed nibh. Suspendisse blandit neque in tristique egestas. Integer vulputate ornare fermentum.",
  "Praesent interdum libero quis nibh pharetra, non gravida metus euismod. Curabitur sed diam vel sapien mattis gravida. Phasellus pellentesque mollis neque, eu venenatis mi lobortis vel. Cras quis dolor eget metus laoreet sagittis non ut libero. Suspendisse venenatis diam non ornare commodo. Nam varius in neque quis efficitur. Quisque sagittis nisl vel pretium blandit. Proin aliquam justo eget velit auctor, quis consectetur tortor pulvinar. Cras eros velit, facilisis et feugiat sit amet, finibus eu nunc. Duis consectetur bibendum est ac feugiat. Aenean maximus lacus euismod mollis porta. Proin sapien eros, egestas eget commodo et, consequat ut leo. Nulla rhoncus nibh vel molestie eleifend. Donec felis dui, elementum in accumsan in, egestas vel nibh.",
  "Duis interdum tincidunt sem ut bibendum. Duis vel odio malesuada, auctor justo sed, molestie quam. Ut et nisl mattis ex mollis iaculis eget nec ipsum. Mauris dictum maximus dui non aliquet. Suspendisse porta scelerisque sapien non aliquet. Quisque mollis nulla et urna iaculis, eget gravida diam dignissim. Praesent consequat pretium dui, nec aliquam nunc. Sed faucibus metus sit amet massa auctor sodales. Phasellus rutrum vitae tortor ac pretium. Vivamus rutrum sem felis, in facilisis augue sodales sed. Mauris efficitur blandit blandit. Nulla at erat sit amet lectus pretium viverra. Aliquam quam tortor, lobortis vitae nibh sit amet, lacinia lacinia magna. In mollis semper pretium. Phasellus at varius tortor. Nullam vulputate mauris eget enim laoreet porttitor vel nec metus.",
  "Praesent id bibendum nulla. Quisque finibus, diam sed ultricies vehicula, lectus tortor vulputate nunc, in accumsan orci orci vitae lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer pretium nisi non eros blandit, a iaculis lacus ultrices. Pellentesque dapibus egestas aliquam. Proin euismod pellentesque nisi et fermentum. Praesent sodales, dui id accumsan viverra, purus magna lobortis nulla, rutrum accumsan tortor purus sed diam. Nullam lacus libero, bibendum eget vehicula quis, imperdiet id urna. Ut at luctus lorem, vitae egestas elit. Nullam ut ornare velit, at maximus neque.",
  "Donec quam ipsum, sodales nec diam a, sodales tempor orci. Nam a massa rutrum, commodo erat eget, rhoncus ante. Sed aliquet magna erat, non porttitor lectus malesuada gravida. Nunc facilisis bibendum velit, ac feugiat urna elementum id. Donec sit amet tortor venenatis, lacinia purus in, tincidunt ante. In sit amet arcu id nisi porttitor pellentesque. Sed et auctor nulla, nec finibus leo. Cras viverra auctor lectus, id convallis felis vehicula at.",
];

const generateIpsum = () => {
    const value = input_paragraphs.value;
    let txt = text.slice(0, value);
    txt = txt.map(item => `<p class='output_p'>${item}</p><br>`)
    .join("")
    output.innerHTML = txt;
};

const generateWords = () => {
    const value = input_words.value;
    let txt = text.toString().split("").slice(0, value);
    console.log(txt);
    txt = txt
    .filter(e => e)
    // .map(item => `<p class='output_w'>${item}</p>`)
    .join("")
    console.log(txt);
    output.innerHTML = txt;
}

generate_btn.addEventListener('click', generateIpsum);
generate_btn_words.addEventListener('click', generateWords);