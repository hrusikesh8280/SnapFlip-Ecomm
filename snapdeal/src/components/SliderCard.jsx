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
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Head Phone</h6>
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
                    src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Noodles"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Ray-ben Glass</h6>
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
                    src="https://images.unsplash.com/photo-1609942571926-f3fe26feab26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>AXE Black Fresh</h6>
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
                    src="https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Nike air</h6>
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
                    src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>eleganzze Sweater</h6>
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
                    src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Fossil Watch</h6>
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
                    src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Jaipuri Dress</h6>
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
                    src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Tshirt</h6>
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
                    src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fEJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Google Speaker</h6>
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
                    src="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QmFieSUyMGNsb3RofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Baby Dresses</h6>
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
                    src="https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Qmx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>jbl wireless Speaker</h6>
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
                    src="https://images.pexels.com/photos/13599785/pexels-photo-13599785.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Dr pepper</h6>
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
                    src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Table Lamp</h6>
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
            <div className="product">
              <div className="product-thumb">
                <a href="#">
                  <img
                    src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>eleganzze Sweater</h6>
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
                    src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Fossil Watch</h6>
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
                    src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Jaipuri Dress</h6>
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
                    src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Rwatch"
                  />
                </a>
              </div>
              <div className="product-body">
                <div className="title">
                  <h6>Tshirt</h6>
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
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};
