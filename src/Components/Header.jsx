import React from 'react';

export const Header = () => {
  return (
    <div className="container d-flex flex-row align-items-center justify-content-center bg-primary py-3 mt-2">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div class="col-md-6 col-12">
            <div role="group" class="input-group">
              <div class="bg-light input-group-prepend">
                <div class="input-group-text">
                  <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="search" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-search b-icon bi">
                    <g>
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <input type="search" placeholder="Busca por cargo, salario, ubicación o empresa" class="form-control form-control-md" id="__BVID__310" />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex aling-items-center justify-content-center">
              <button type="button" class="btn btn-outline-light btn-sm rounded-pill mx-1"> Área
                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-caret-down-fill b-icon bi">
                  <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                    </path>
                  </g>
                </svg>
              </button>
              <button type="button" class="btn btn-outline-light btn-sm rounded-pill mx-1"> Cargo
                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-caret-down-fill b-icon bi">
                  <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                    </path>
                  </g>
                </svg>
              </button>
              <button type="button" class="btn btn-outline-light btn-sm rounded-pill mx-1"> Salario
                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-caret-down-fill b-icon bi">
                  <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                    </path>
                  </g>
                </svg>
              </button>
              <button type="button" class="btn btn-outline-light btn-sm rounded-pill mx-1"> Ubicación
                <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="caret down fill" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-caret-down-fill b-icon bi">
                  <g transform="translate(8 8) scale(0.7 0.7) translate(-8 -8)">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                    </path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
