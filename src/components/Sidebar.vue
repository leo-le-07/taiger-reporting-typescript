<template>
  <div class="sidenav" :class="{ collapsed: isCollapsed }">
    <div class="collapseButton" @click="toggleCollapsed()">
      <HambergerMenuIcon v-if="isCollapsed" />
      <ArrowBackIcon v-else />
    </div>
    <div class="title" v-show="!isCollapsed">
      reports
    </div>
    <div class="item-list" :class="{ collapsed: isCollapsed }">
      <div class="item">
        <router-link :to="routeConstants.overview.path" tag="a">
          <span class="icon">
            <font-awesome-icon :icon="icons.overviewIcon" :size="iconSize" />
          </span>
          Overview
        </router-link>
      </div>
      <div class="item-group">
        <div class="item" @click="collapses.isEngagementOpen = !collapses.isEngagementOpen">
          <a href="#">
            <span class="icon">
              <font-awesome-icon :icon="icons.engagementIcon" :size="iconSize" />
            </span>
            Engagement
          </a>
          <span class="expand-collapse-icon">
            <font-awesome-icon
              v-show="!collapses.isEngagementOpen"
              :icon="icons.caretDownIcon"
            />
            <font-awesome-icon
              v-show="collapses.isEngagementOpen"
              :icon="icons.caretUpIcon"
            />
          </span>
        </div>
        <div class="sub-item-group" v-show="collapses.isEngagementOpen">
          <a class="sub-item" href="#">Users Activities</a>
          <a class="sub-item" href="#">Deflection Rate</a>
          <a class="sub-item" href="#">Goals</a>
        </div>
      </div>
      <div class="item">
        <router-link :to="routeConstants.contentPerformance.path" tag="a">
          <span class="icon">
            <font-awesome-icon :icon="icons.contentPerformanceIcon" :size="iconSize" />
          </span>
          {{ isCollapsed ? "Content" : "Content Performance" }}
        </router-link>
      </div>
      <div class="item">
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="icons.engagementIcon" :size="iconSize" />
          </span>
          {{ isCollapsed ? "Satisfaction" : "User Satisfaction" }}
        </a>
      </div>
      <div class="item">
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="icons.formReportsIcon" :size="iconSize" />
          </span>
          {{ isCollapsed ? "Form Report" : "Form Reports" }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import {
  faDesktop,
  faUsers,
  faChartBar,
  faThumbsUp,
  faAlignLeft,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';

import ArrowBackIcon from '@/assets/arrow-back-ios-24px.svg';
import HambergerMenuIcon from '@/assets/hamberger-menu.svg';
import { routeConstants } from '@/constants';

@Component({
  components: {
    ArrowBackIcon,
    HambergerMenuIcon,
  },
})
export default class Sidebar extends Vue {
  private icons = {
    overviewIcon: faDesktop,
    engagementIcon: faUsers,
    contentPerformanceIcon: faChartBar,
    userSatisfactionIcon: faThumbsUp,
    formReportsIcon: faAlignLeft,
    caretDownIcon: faCaretDown,
    caretUpIcon: faCaretUp,
  };
  private collapses = {
    isEngagementOpen: false,
  };
  private routeConstants = routeConstants;

  @Prop(Boolean) private readonly isCollapsed!: boolean | undefined;
  @Prop(Function) private readonly toggleCollapsed!: () => void;

  public get iconSize() {
    return this.isCollapsed ? '3x' : 'xs';
  }
}
</script>

<style scoped lang="scss">
.sidenav {
  height: 100%;
  width: 280px;
  min-width: 280px;
  background-color: $white10;
  padding-top: 60px;
  padding-left: 30px;
  position: fixed;
  float: left;
  transition: .3s ease;
}

.collapsed {
  width: 80px;
  min-width: 80px;
  padding-left: 0;
  transition: .3s ease;
}

.title {
  text-transform: uppercase;
  font-size: $fontSizeSmall14;
  font-weight: 500;
  color: $gray500;
  margin-bottom: 10px;
}

.item-list {
  padding-left: 10px;
  padding-right: 20px;

  .item-group {
    .item > a {
      width: calc(100% - 10px);
    }
  }

  .item {
    display: flex;
    justify-content: space-between;
    line-height: 35px;
    color: $gray600;
    font-size: $fontSizeNormal;

    &:hover {
      color: $primary;
      cursor: pointer;

      svg {
        fill: $primary;
      }
    }

    a {
      text-decoration: none;
      color: $gray600;
      display: block;

      &:hover {
        color: $primary;
      }

      &.router-link-exact-active {
        color: $primary;
      }
    }

    .icon {
      margin-right: 15px;
      width: 15px;
      display: inline-block;
    }
  }

  .sub-item-group {
    display: flex;
    flex-direction: column;

    .sub-item {
      line-height: 35px;
      color: $gray600;
      padding-left: 50px;

      &:hover {
        color: $primary;
      }
    }
  }

  &.collapsed {
    padding-left: 0;

    .item {
      line-height: 35px;
      color: $gray600;
      font-size: $fontSizeSmall12;

      a {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-top: 10px;
        width: 100%;

        &:hover {
          background: $primary;
          color: $white;
        }

        &.router-link-exact-active {
          background: $primary;
          color: $white;
        }
      }
    }

    .icon {
      margin-right: 0;
    }
  }
}

.collapseButton {
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #444444;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 30px;
  transform: translateX(50%);
}
</style>
