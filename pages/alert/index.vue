<script src="./script.js"></script>
<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <b-breadcrumb :items="items" />
          </div>
          <h4 class="page-title">
            Alert
          </h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div>
          <b-alert show>
            Default Alert
          </b-alert>

          <b-alert variant="success" show>
            Success Alert
          </b-alert>

          <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
            Dismissible Alert!
          </b-alert>

          <b-alert
            :show="dismissCountDown"
            dismissible
            variant="warning"
            @dismissed="dismissCountDown = 0"
            @dismiss-count-down="countDownChanged"
          >
            <p>
              This alert will dismiss after {{ dismissCountDown }} seconds...
            </p>
            <b-progress
              variant="warning"
              :max="dismissSecs"
              :value="dismissCountDown"
              height="4px"
            />
          </b-alert>

          <b-button variant="info" class="m-1" @click="showAlert">
            Show alert with count-down timer
          </b-button>
          <b-button
            variant="info"
            class="m-1"
            @click="showDismissibleAlert = true"
          >
            Show dismissible alert ({{
              showDismissibleAlert ? "visible" : "hidden"
            }})
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>
