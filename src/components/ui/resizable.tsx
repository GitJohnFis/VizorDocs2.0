"use client"

import * as React from "react"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"
import type {
  PanelGroupProps,
  PanelProps,
  PanelResizeHandleProps,
} from "react-resizable-panels"
import {
  Panel as ResizablePrimitivePanel,
  PanelGroup as ResizablePrimitivePanelGroup,
  PanelResizeHandle as ResizablePrimitivePanelResizeHandle,
} from "react-resizable-panels"

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitivePanelGroup>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitivePanelGroup>
>(({ className, ...props }, ref) => (
  <ResizablePrimitivePanelGroup
    ref={ref}
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
))
ResizablePanelGroup.displayName = "ResizablePanelGroup"

const ResizablePanel = ResizablePrimitivePanel

ResizablePanel.displayName = "ResizablePanel"

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitivePanelResizeHandle>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitivePanelResizeHandle> & {
    withHandle?: boolean
  }
>(({ className, withHandle, ...props }, ref) => (
  <ResizablePrimitivePanelResizeHandle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-dragging=true]]:bg-primary [&[data-dragging=true]]:opacity-50",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitivePanelResizeHandle>
))
ResizableHandle.displayName = "ResizableHandle"

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
