import React, { Fragment } from "react";
import "../CSS/SliderCard.css";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1532, itemsToShow: 5 },
];

export const SliderCard = () => {
  return (
    <Fragment>
      <section>
        <div className="row">
          <Carousel breakPoints={breakPoints}>
            {/* Product-1 */}

            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MKrJ4JINZteilUfxZa2k6a9lVzRORYkxQg&usqp=CAU"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Rolex Watch</h6>
                </div>
                <div className="price">
                  <span>Rs- 18000</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Product-2 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n3.sdlcdn.com/imgs/k/f/v/Foodstrukk-Quinoa-Hakka-Healthy-Noodles-SDL922372402-3-ac24f.png"
                    alt="Noodles"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Hakka Healthy Noodles</h6>
                </div>
                <div className="price">
                  <span>Rs- 100</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>

                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product-3 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n4.sdlcdn.com/imgs/k/j/8/large/HIGHLIGHT-FASHION-EXPORT-Blue-Straight-SDL991821680-1-0fa22.webp"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Blue Straight Kurta</h6>
                </div>
                <div className="price">
                  <span>Rs- 300</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product-4 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n1.sdlcdn.com/imgs/i/z/e/large/Bentag-Vegetable-Fruit-Clever-Cutter-SDL841893040-1-ea5e3.jpg"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Fruit Cutter</h6>
                </div>
                <div className="price">
                  <span>Rs- 100</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product-5 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n1.sdlcdn.com/imgs/k/m/s/large/kavylip-50-gm-Slimming-Green-SDL442550836-1-68085.png"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Lemon Green Tea</h6>
                </div>
                <div className="price">
                  <span>Rs- 300</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product-6 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n4.sdlcdn.com/imgs/k/m/f/large/Lifelong-500W-Mixer-Grinder-3-SDL103394891-1-d5df6.webp"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Mixer Grinder</h6>
                </div>
                <div className="price">
                  <span>Rs- 2800</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product-7 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>bhawna collection Loard Shiv Trishul</h6>
                </div>
                <div className="price">
                  <span>Rs- 400</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product-8 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n2.sdlcdn.com/imgs/k/k/v/large/Orpat-More-than-500W-Mixer-SDL422286131-1-12988.webp"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Orpat Grinder</h6>
                </div>
                <div className="price">
                  <span>Rs- 3800</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* product-9 */}
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n3.sdlcdn.com/imgs/h/u/a/large/CXL-Titon-2-Ltr-Gravity-SDL317221601-1-71514.jpg"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Electric jug</h6>
                </div>
                <div className="price">
                  <span>Rs- 1800</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n2.sdlcdn.com/imgs/j/c/z/large/BOGATCHI-70-Dark-Oats-Cranberry-SDL775781137-1-9bde4.webp"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Oats Canberry</h6>
                </div>
                <div className="price">
                  <span>Rs- 600</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Regular T-shirt</h6>
                </div>
                <div className="price">
                  <span>Rs- 200</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n3.sdlcdn.com/imgs/i/u/v/large/HeelSocks1-aeb5a.jpg"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Heel Socks</h6>
                </div>
                <div className="price">
                  <span>Rs- 500</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://n1.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL051246309-1-51a91.jpg"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Cotton T-shirt</h6>
                </div>
                <div className="price">
                  <span>Rs- 100</span>
                </div>
                <div className="rating">
                  <div className="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
                <div className="footer">
                  <div className="btn">
                    <a href="#" className="btn-custom primary">
                      Add To Cart
                    </a>
                    <a href="#" className="btn-custom primary">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};
