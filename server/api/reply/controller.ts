import { defineController } from './$relay'
import { createReply, getReplyList } from '$/service/reply'

export default defineController(() => ({
  // not used
  get: async () => {
    const replylist = await getReplyList()

    if (replylist.length === 0) {
      return { status: 404 }
    }

    return { status: 200, body: replylist }
  },

  post: async ({ body }) => {
    const reply = await createReply(body)

    if (!reply) {
      return { status: 400 }
    }

    return { status: 204 }
  }
}))
