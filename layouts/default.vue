<template>
  <v-app class="mainBack">
    <!--! navigation drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :right="$vuetify.rtl"
      app
      fixed
      floating
      color="boxBack"
    >
      <!--! user information section -->
      <template #prepend>
        <v-list dense :shaped="drawer" :rounded="!drawer">
          <v-list-item class="mt-4">
            <v-list-item-avatar>
              <img src="/icons/user-info.svg" alt="John"/>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-10 f-med lh-12">
                {{ $store.state.auth.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="font-8" v-if="!$store.state.auth.username ">
                {{ $store.state.auth.username }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon
                small
                class="mainBack pa-1 rounded-lg"
                v-text="'mdi-pencil'"
              />
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>
      <!--! navigation routes section -->
      <v-list dense :shaped="drawer" :rounded="!drawer">
        <template v-for="(route, routeIndex) in routes">
          <!--! children route section -->
          <v-list-group
            v-if="
              !!route.children
                ? route.children.length > 0
                  ? route.meta.show
                  : false
                : false
            "
            :key="routeIndex"
            color="mainColor"
          >
            <!--! activator section -->
            <template #activator>
              <v-list-item-icon class="ml-4">
                <v-avatar rounded size="22">
                  <img
                    :src="addSlashForImages(route.meta.icon)"
                    :alt="route.meta.icon"
                  />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="route.meta.title"/>
              </v-list-item-content>
            </template>
            <!--! children route items -->
            <template v-for="(child, childIndex) in route.children">
              <v-list-item
                v-if="child.meta.show"
                :key="childIndex"
                :disabled="child.meta.disabled"
                :to="route.path + '/' + child.path"
                color="mainColor"
                exact-active-class="nav-active"
                class="nav"
              >
                <v-list-item-icon class="ml-4 mr-3">
                  <v-avatar rounded size="22">
                    <img
                      :src="addSlashForImages(child.meta.icon)"
                      :alt="child.meta.icon"
                    />
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="child.meta.title"/>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
          <!--! single routes section -->
          <template v-else>
            <v-list-item
              v-if="route.meta.show"
              :key="routeIndex"
              :to="route.path"
              color="mainColor"
              exact-active-class="nav-active"
              class="nav"
            >
              <v-list-item-icon class="ml-4">
                <v-avatar rounded size="22">
                  <img
                    :src="addSlashForImages(route.meta.icon)"
                    :alt="route.meta.icon"
                  />
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="route.meta.title"/>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
      <!--! bottom section of navigation drawer -->
      <template #append>
        <div class="pt-2 pb-6">
          <div class="d-flex my-0 mx-a" style="width: fit-content">
            <div class="col-auto py-0 px-1">
              <v-avatar size="32" rounded>
                <img src="/sham-panel-logo-01.svg" alt="logo.svg"/>
              </v-avatar>
            </div>
            <div class="col-auto pa-0 pt-1">
              <span class="mainColor--text f-med">Ryca Core </span>
            </div>
          </div>
        </div>
      </template>
    </v-navigation-drawer>
    <!--! app bar -->
    <v-app-bar app flat fixed color="boxBack" class="elevation-0">
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <!--! breadcrumbs section -->
      <div v-if="$vuetify.breakpoint.smAndUp" class="col-auto pa-0">
        <v-breadcrumbs :items="breadcrumbItems">
          <template #item="{ item }">
            <v-breadcrumbs-item
              exact-active-class="mainColor--text"
              :to="item.to"
              :disabled="item.disabled"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
          <template #divider>
            <v-icon>mdi-chevron-left</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <!--! make some space -->
      <v-spacer/>
      <!--! divider section -->
      <div class="col-auto px-1">
        <v-divider vertical class="mx-2 py-4"/>
      </div>
      <!--! change theme section -->
      <div class="col-auto py-0 px-2">
        <v-icon
          v-if="darkTheme === true"
          color="alert"
          @click="setThemeStatus(false)"
        >
          mdi-white-balance-sunny
        </v-icon>
        <v-icon v-else color="info" @click="setThemeStatus(true)">
          mdi-weather-night
        </v-icon>
      </div>
      <!--! notification section -->
      <div class="col-auto py-0 px-2">
        <v-badge :value="true" overlap color="mainColor">
          <template #badge>
            <span>{{ countMessage }}</span>
          </template>
          <v-hover v-slot="{ hover }">
            <v-icon
              class="mainBack pa-1 rounded-lg cursor-pointer"
              :color="hover ? 'mainColor' : ''"
              v-text="'mdi-bell'"
            />
          </v-hover>
        </v-badge>
      </div>
      <!--! divider section -->
      <div class="col-auto px-1">
        <v-divider vertical class="mx-2 py-4"/>
      </div>
      <!--! logout button section -->
      <div class="col-auto pa-0">
        <v-hover v-slot="{ hover }">
          <v-icon
            class="pa-1 rounded-lg cursor-pointer"
            :class="[hover ? 'error white--text' : 'mainBack title--text']"
            @click="logoutUser"
            v-text="'mdi-power'"
          />
        </v-hover>
      </div>
    </v-app-bar>
    <!--! main section -->
    <v-main class="mainBack">
      <v-container class="col-xl-11 my-a">
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//! mixins
import breadCrumb from '../mixins/shared/layouts/breadcrumb'
import theme from '../mixins/shared/layouts/theme'
import navigation from '../mixins/shared/layouts/navigation'
import Resource from '@/api/crud/resource'

export default {
  name: 'DefaultLayout',
  mixins: [navigation, breadCrumb, theme],
  middleware: ['authenticate'],
  data() {
    return {
      countMessage: 0,
    }
  },
  created() {
    this.drawer = this.$vuetify.breakpoint.mdAndUp
    this.createNavigationDrawer()
    this.createBreadcrumb()
    setTimeout(() => {
      this.darkTheme = this.getThemeStatus()
    }, 300)
    this.getCountMessage()
  },
  methods: {
    getCountMessage() {
      new Resource('unseen', this.$store.state.auth.token)
        .list()
        .then((res) => {
          this.countMessage = res.data.result.messages
        })
        .catch(() => {
        })
    },
    addSlashForImages(imageSrc) {
      return imageSrc.substr(0, 1) === '/' ? imageSrc : '/' + imageSrc
    },
    logoutUser() {
      console.log('از سامانه خارج شدید');
      this.$store.dispatch('auth/logoutConfig')
      this.$router.push({path: '/'})
    },
  },
}
</script>
